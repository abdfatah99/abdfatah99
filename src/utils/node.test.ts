import { Directory, Material } from "./node";
import fs from "fs";
import path from "path";
import frontMatter from "front-matter";

jest.mock("fs");
jest.mock("front-matter");

const mockedFs = fs as jest.Mocked<typeof fs>;
const mockedFrontMatter = frontMatter as jest.MockedFunction<
  typeof frontMatter
>;

// Helper function to buidl a face fs.Dirent-like object.
// fs.Dirent has more fields at runtime, but test only need these three.
function makeDirent(name: string, isDir: boolean): fs.Dirent {
  return {
    name,
    isFile: () => !isDir,
    isDirectory: () => isDir,
  } as unknown as fs.Dirent;
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Directory", () => {
  describe("constructor", () => {
    it("builds a lowercase, URL-safe dirNodeURLPath from the entry path", () => {
      mockedFs.existsSync.mockReturnValue(false);

      const dir = new Directory("/root/Personal Notes/Database");

      // spaces and non-alphanumerics become hyphens, path stays lowercase
      expect(dir.getDirNodeURLPath()).toBe("/-root-personal-notes-database");
    });

    it("does not read README.md metadata when the file does not exist", () => {
      mockedFs.existsSync.mockReturnValue(false);

      new Directory("/root/database");

      expect(mockedFs.readFileSync).not.toHaveBeenCalled();
    });

    it("reads and parses README.md metadata when the file exists", () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue("---\ntitle: Database\n---\n");
      mockedFrontMatter.mockReturnValue({
        attributes: {
          title: "Database",
          description: "Database personal notes",
          image: "",
          date: "2024-01-01",
          author: "Fatah",
        },
        body: "",
      } as any);

      const dir = new Directory("/root/database");

      expect(mockedFs.readFileSync).toHaveBeenCalledWith(
        path.join("/root/database", "README.md"),
        "utf-8",
      );
      expect(dir.getDescription()).toBe("Database personal notes");
    });
  });

  describe("getRawDirectoryName / getDirectoryName", () => {
    it("returns the raw (hyphenated) and formatted (spaced) directory names", () => {
      mockedFs.existsSync.mockReturnValue(false);

      const dir = new Directory("/root/001-intro-to-postgre");

      expect(dir.getRawDirectoryName()).toBe("001-intro-to-postgre");
      expect(dir.getDirectoryName()).toBe("001 intro to postgre");
    });
  });

  describe("getChildrenDirectory", () => {
    it("returns only directory entries as Directory instances", () => {
      mockedFs.existsSync.mockReturnValue(false);
      mockedFs.readdirSync.mockReturnValue([
        makeDirent("postgresql", true),
        makeDirent("001-intro.md", false),
        makeDirent("mongodb", true),
      ] as any);

      const dir = new Directory("/root/database");
      const children = dir.getChildrenDirectory();

      expect(children).toHaveLength(2);
      expect(children.every((c) => c instanceof Directory)).toBe(true);
      expect(children.map((c) => c.getRawDirectoryName())).toEqual([
        "postgresql",
        "mongodb",
      ]);
    });

    it("caches the result on subsequent calls (readdirSync called once)", () => {
      mockedFs.existsSync.mockReturnValue(false);
      mockedFs.readdirSync.mockReturnValue([
        makeDirent("postgresql", true),
      ] as any);

      const dir = new Directory("/root/database");
      dir.getChildrenDirectory();
      dir.getChildrenDirectory();

      expect(mockedFs.readdirSync).toHaveBeenCalledTimes(1);
    });

    it("returns an empty array when the directory has no subdirectories", () => {
      mockedFs.existsSync.mockReturnValue(false);
      mockedFs.readdirSync.mockReturnValue([
        makeDirent("001-intro.md", false),
      ] as any);

      const dir = new Directory("/root/database");

      expect(dir.getChildrenDirectory()).toEqual([]);
    });
  });

  describe("getContentList", () => {
    function setupMaterialFiles(files: { name: string; date: string }[]) {
      mockedFs.existsSync.mockReturnValue(false);
      mockedFs.readdirSync.mockReturnValue(
        files.map((f) => makeDirent(f.name, false)) as any,
      );

      // Each Material instance calls readFileSync/frontMatter when
      // getMetadata() runs (triggered internally by the sort step).
      mockedFs.readFileSync.mockImplementation((filePath) => {
        const found = files.find((f) => filePath.toString().endsWith(f.name));
        return `---\ndate: ${found?.date ?? ""}\n---\n`;
      });

      mockedFrontMatter.mockImplementation((content: any) => {
        const dateMatch = /date:\s*(.*)/.exec(content);
        return {
          attributes: {
            title: "",
            description: "",
            image: "",
            date: dateMatch?.[1]?.trim() ?? "",
            author: "",
          },
          body: "",
        } as any;
      });
    }

    it("excludes README.md by default", () => {
      setupMaterialFiles([
        { name: "README.md", date: "2024-01-01" },
        { name: "001-intro.md", date: "2024-01-02" },
      ]);

      const dir = new Directory("/root/database");
      const materials = dir.getContentList();

      expect(materials).toHaveLength(1);
      expect(materials[0]).toBeInstanceOf(Material);
    });

    it("includes README.md when readme: true is passed", () => {
      setupMaterialFiles([
        { name: "README.md", date: "2024-01-01" },
        { name: "001-intro.md", date: "2024-01-02" },
      ]);

      const dir = new Directory("/root/database");
      const materials = dir.getContentList({ readme: true });

      expect(materials).toHaveLength(2);
    });

    it("ignores non-markdown files", () => {
      mockedFs.existsSync.mockReturnValue(false);
      mockedFs.readdirSync.mockReturnValue([
        makeDirent("001-intro.md", false),
        makeDirent("image.png", false),
        makeDirent("notes.txt", false),
      ] as any);
      mockedFs.readFileSync.mockReturnValue("---\ndate: 2024-01-01\n---\n");
      mockedFrontMatter.mockReturnValue({
        attributes: {
          title: "",
          description: "",
          image: "",
          date: "2024-01-01",
          author: "",
        },
        body: "",
      } as any);

      const dir = new Directory("/root/database");
      const materials = dir.getContentList();

      expect(materials).toHaveLength(1);
    });

    it("sorts materials by date, most recent first", () => {
      setupMaterialFiles([
        { name: "001-old.md", date: "2023-01-01" },
        { name: "002-new.md", date: "2024-06-01" },
        { name: "003-mid.md", date: "2023-12-01" },
      ]);

      const dir = new Directory("/root/database");
      const materials = dir.getContentList();

      expect(materials.map((m) => m.getFileName())).toEqual([
        "002 new",
        "003 mid",
        "001 old",
      ]);
    });

    it("respects the limit option", () => {
      setupMaterialFiles([
        { name: "001.md", date: "2024-01-01" },
        { name: "002.md", date: "2024-01-02" },
        { name: "003.md", date: "2024-01-03" },
      ]);

      const dir = new Directory("/root/database");
      const materials = dir.getContentList({ limit: 2 });

      expect(materials).toHaveLength(2);
    });

    it("treats missing dates as epoch 0 without throwing", () => {
      setupMaterialFiles([{ name: "001-no-date.md", date: "" }]);

      const dir = new Directory("/root/database");

      expect(() => dir.getContentList()).not.toThrow();
      expect(dir.getContentList()).toHaveLength(1);
    });

    it("works with default options (no arguments passed)", () => {
      setupMaterialFiles([{ name: "001.md", date: "2024-01-01" }]);

      const dir = new Directory("/root/database");

      expect(() => dir.getContentList()).not.toThrow();
    });
  });
});

// =============================================================================
// Material
// =============================================================================

describe("Material", () => {
  describe("constructor", () => {
    it("derives fileName (spaced) and rawFileName (hyphenated) from the path", () => {
      const material = new Material(
        "/root/database/postgresql/001-intro-to-postgre.md",
      );

      expect(material.getFileName()).toBe("001 intro to postgre");
    });
  });

  describe("getMetadata", () => {
    it("reads the file and parses frontmatter", () => {
      mockedFs.readFileSync.mockReturnValue(
        "---\ntitle: Intro to Postgres\ndescription: Database notes\n---\nBody content",
      );
      mockedFrontMatter.mockReturnValue({
        attributes: {
          title: "Intro to Postgres",
          description: "Database notes",
          image: "",
          date: "2024-01-01",
          author: "Fatah",
        },
        body: "Body content",
      } as any);

      const material = new Material("/root/database/001-intro.md");
      const metadata = material.getMetadata();

      expect(mockedFs.readFileSync).toHaveBeenCalledWith(
        "/root/database/001-intro.md",
        "utf-8",
      );
      expect(metadata.title).toBe("Intro to Postgres");
      expect(metadata.description).toBe("Database notes");
    });
  });

  describe("getTitle", () => {
    it("returns the title from metadata after getMetadata has been called", () => {
      mockedFs.readFileSync.mockReturnValue("---\ntitle: MySQL\n---\n");
      mockedFrontMatter.mockReturnValue({
        attributes: {
          title: "MySQL",
          description: "",
          image: "",
          date: "",
          author: "",
        },
        body: "",
      } as any);

      const material = new Material("/root/database/mysql.md");
      material.getMetadata();

      expect(material.getTitle()).toBe("MySQL");
    });

    it("returns an empty string via getDescription when description is missing", () => {
      mockedFs.readFileSync.mockReturnValue("---\ntitle: MySQL\n---\n");
      mockedFrontMatter.mockReturnValue({
        attributes: {
          title: "MySQL",
          description: undefined,
          image: "",
          date: "",
          author: "",
        },
        body: "",
      } as any);

      const material = new Material("/root/database/mysql.md");
      material.getMetadata();

      expect(material.getDescription()).toBe("");
    });
  });

  describe("getDirNodeURLPath (inherited from Node)", () => {
    it("produces a lowercase, extension-stripped URL path", () => {
      const material = new Material(
        "/root/database/postgresql/001-Intro-To-Postgre.MD",
      );

      expect(material.getDirNodeURLPath()).toBe(
        "/-root-database-postgresql-001-intro-to-postgre",
      );
    });
  });
});
