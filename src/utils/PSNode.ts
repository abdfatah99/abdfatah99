import { metadata } from "./../app/layout";
import { parse, relative } from "path";
/**
 * 1. use concept of Object Oriented Programming or
 * 2. use concept of Node (Data Structure)
 *
 * So every function/page that need the directory content, just call this function
 * with its requirement
 * you don't need to create or call fs.readdirSync() in every (dynamic) page.
 *
 * expected output
 *
 * personalNotesDirectory: Object = {
 *      node: {
 *          - node
 *          - content
 *      },
 * }
 *
 * Original concept of OOP define that the object is used to define structure of
 * data that exchange in different system within the application
 *
 * Template:
 * later in the template, expected to access the directory structure like
 *  content = {
 *      name: lorem
 *      originalPath: lorem
 *      image: lorem
 *      link: lorem
 *      type: directory | file: markdown
 *      description: lorem
 *
 *  }
 *
 * we can use to define the content object to render the card or render the content
 *
 * 1. Instanciate the class in every node
 * 2. The instance method used to get the data
 *
 * Info:
 * 1. Dirent Class Structure
 *
 * Dirent {
 *
 * }
 *
 */

import fs, { Dirent, stat } from "fs";
import path, { dirname } from "path";
import frontMatter from "front-matter";
// import config from "./config";
import config from "./config";
import { Logger } from "@/src/lib/logging";

const log = new Logger("src/utils/PSNode.ts");

export class PSDirectoryOld {
  //   #ListOfDirectory: PSDirectory[] = [];
  // readonly Children: Dirent[];
  #children: PSDirectoryOld[] | null = null;
  #material: PSDirectoryOld[] | null = null;
  readonly fullPath: string;
  readonly readmepath: string;
  readonly name: string;
  readonly urlPath: string;

  private metadata: {
    title?: string;
    description?: string;
    image?: string;
    date?: string;
  } = {};

  constructor(directoryPath: string) {
    // example `directory` string from the url
    // personal-notes/python
    // then we have to search README.md in the directory, get the metadata
    // and display the metadata in the card
    this.fullPath = directoryPath;
    this.readmepath = path.join(directoryPath, "README.md");
    this.name = path.basename(directoryPath);
    // url to Entry
    this.urlPath =
      "/" +
      directoryPath
        .split(path.sep) // `\\` used because of window. window -> \; posix -> /
        .slice(1) // remove 'src'
        .map((value) =>
          value
            .replace(/\.md$/i, "") // remove .md at the end, case-insensitiv
            .replace(/[^a-z0-9_]+/gi, "-") // replace non-alphanumeric/underscore
            .toLocaleLowerCase(),
        )
        .join("/");

    // if README.md is exist in the directory, extract the metadata of README.md
    // in the directory
    if (fs.existsSync(this.readmepath)) {
      const readmeContent = fs.readFileSync(this.readmepath, "utf-8");
      const parsedMetadata = frontMatter<{
        title?: string;
        description?: string;
        image?: string;
        date?: string;
      }>(readmeContent);

      this.metadata = parsedMetadata.attributes;
    }
  }

  // Name of directory or file
  getName() {
    return this.name;
  }

  // 1. Description exist in folder Readme.md
  getDescription() {
    return this.metadata.description || "";
  }

  /**
   * Status of the node, is it a directory or a file
   */
  getStatus(): "directory" | "file" | "not_found" {
    // console.log("check full path", this.fullPath)
    // console.log("check file", fs.existsSync(this.fullPath))
    // if (fs.existsSync(this.fullPath)) {
    //   const directoryStatus = fs.statSync(`${this.fullPath}.md`);
    //   return directoryStatus.isDirectory() ? "directory" : "file";
    // }

    // Define if path is file or directory
    // const fullPathResolve = path.resolve(this.fullPath)
    // try {
    //   const stats = fs.statSync(fullPathResolve);
    //   if (stats.isDirectory()) return 'directory'
    //   if (stats.isFile()) return 'file'
    //   return 'not_found'
    // } catch (err) {
    //   return "not_found"
    // }

    const stats = fs.statSync(this.fullPath);
    return stats.isDirectory() ? "directory" : "file";
  }

  /**
   * Link to the page that represent content of this directory/file
   *
   * 1. if the class (card) represent directory, return this.urlPath
   * 2. if the class (card) represent material (markdown file), display content
   */
  getLink() {
    if (this.getStatus() == "directory") return this.urlPath;
    // console.log("URL path: ", this.urlPath)

    return this.urlPath;
  }

  // Image representative for the directory/file in the card
  getImage() {}

  /**
   * Load children directory
   *
   * Strategy:
   * Lazy load directory when called the function
   *
   * @returns
   */
  getChildrenDirectory() {
    // 1. if the class already has a children, return its children
    // 2. read all directory content -> Dirent[] class, select only if it's a
    //    directory

    log.logFlow("check children directory", this.#children);

    if (this.#children) {
      return this.#children;
    } else {
      const dirents = fs.readdirSync(this.fullPath, { withFileTypes: true });
      this.#children = dirents
        .filter((dir) => dir.isDirectory())
        .map((dir) => new PSDirectoryOld(path.join(this.fullPath, dir.name)));

      return this.#children;
    }
  }

  getNotesList() {
    this.#material = fs
      .readdirSync(this.fullPath, { withFileTypes: true })
      .filter((material) => material.isFile())
      .filter((pageTsx) => !pageTsx.name.endsWith(".tsx"))
      .map(
        (material) =>
          new PSDirectoryOld(path.join(this.fullPath, material.name)),
      );

    return this.#material;
  }
}

type Metadata = {
  title: string;
  description: string;
  image: string;
  date: string;
};

/**
 * Personal Notes Node
 * Node: it can be directory or file
 */
abstract class PSNode {
  // TODO property:
  // url path, directory path -> resolver function between this two path.
  // protected entryPath: string;
  protected NodeDirPath: string;
  protected Name: string;
  protected NodeURLPath: string;
  protected Description?: string;
  protected metadata: Metadata;

  constructor(entryPath: string) {
    this.NodeDirPath = entryPath;
    this.Name = path.basename(entryPath);
    this.metadata = {
      title: "",
      description: "",
      image: "",
      date: "",
    };

    this.NodeURLPath =
      "/" +
      entryPath
        .split(path.sep) // `\\` used because of window. window -> \; posix -> /
        .map((value) =>
          value
            .replace(/\.(mdx?|MDX?)$/i, "") // remove .md at the end, case-insensitiv
            .replace(/[^a-z0-9_]+/gi, "-") // replace non-alphanumeric/underscore
            .toLocaleLowerCase(),
        )
        .join("/");
  }

  getName() {
    return this.Name;
  }

  getURLPath() {
    // console.log("get node url path: ", this.NodeURLPath);
    return this.NodeURLPath;
  }

  getDescription() {
    return this.Description;
  }
}

export class PSDirectory extends PSNode {
  #children: PSDirectory[] | null = null;
  #material: PSMaterial[] | null = null;

  protected readmePath: string;
  // private metadata!: Metadata;

  constructor(entryPath: string) {
    super(entryPath);
    this.readmePath = path.join(entryPath, "README.md");
    // this.metadata = {};

    if (fs.existsSync(this.readmePath)) {
      const readmeContent = fs.readFileSync(this.readmePath, "utf-8");
      const parsedMetadata = frontMatter<Metadata>(readmeContent);
      this.metadata = parsedMetadata.attributes;
    }
  }

  getDescription(): string {
    return this.metadata.description;
  }

  getURLPath(): string {
    // console.log("PSDirectory nodeDirPath: ", this.NodeDirPath)
    // console.log("============")
    return this.NodeURLPath;
  }

  getChildrenDirectory() {
    if (this.#children) return this.#children;

    const dirents = fs.readdirSync(this.NodeDirPath, { withFileTypes: true });
    console.log("dirents: ", dirents);

    this.#children = dirents
      .filter((dir) => {
        console.log("dir status:", dir.isDirectory());
        return dir.isDirectory();
      })
      .map((dir) => {
        console.log("check dir in children directory", dir);
        return new PSDirectory(path.join(this.NodeDirPath, dir.name));
      });

    return this.#children;
  }

  getNotesList() {
    this.#material = fs
      .readdirSync(this.NodeDirPath, { withFileTypes: true })
      .filter((onlyMaterial) => onlyMaterial.isFile())
      .filter((exclueTsx) => !exclueTsx.name.endsWith(".tsx"))
      .map(
        (material) =>
          new PSMaterial(
            // path.relative(config.psHomePath, path.join(material.name)),
            path.join(this.NodeDirPath, material.name),
          ),
      );
    return this.#material;
  }
}

export class PSMaterial extends PSNode {
  // protected metadata: Metadata = {};
  protected materialPath: string;

  constructor(entryPath: string) {
    super(entryPath);
    this.materialPath = entryPath.concat(".md");
  }

  getMetadata() {
    const materialContent = fs.readFileSync(this.materialPath, "utf-8");
    const parsedMetadata = frontMatter<Metadata>(materialContent);
    this.metadata = parsedMetadata.attributes;

    return this.metadata;
  }
}
