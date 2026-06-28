import { metadata } from "./../app/layout";
import frontMatter from "front-matter";
import fs from "fs";
import { MDFileMetadata } from "./read-directory-content.types";
import path from "path";

import { Logger } from "../lib/logging";

const log = new Logger("src/utils/read-directory-content.ts");

abstract class DirectoryNode {
  protected dirNodePath: string;
  #name: string = ""; // fileName or directoryName
  protected dirNodeURLPath: string;
  protected description?: string;
  protected metadata: MDFileMetadata;

  constructor(dirEntryPath: string) {
    this.dirNodePath = dirEntryPath;
    this.#name = path.basename(dirEntryPath);
    // .basename('/foo/bar/baz/asdf/quux.html')
    // Output: 'quux.html'
    this.metadata = {
      title: "",
      description: "",
      image: "",
      date: "",
      author: "",
    };

    // Unified URL friendly path
    this.dirNodeURLPath =
      "/" +
      dirEntryPath
        .split(path.sep) // `\\` used because of window. window -> \; posix -> /
        .map((value) =>
          value
            .replace(/\.(mdx?|MDX?)$/i, "") // remove .md at the end, case-insentifive
            .replace(/[^a-z0-9_]+/gi, "-") // replace non-alphanumeric/underscore
            .toLocaleLowerCase(),
        )
        .join("/"); // forward-slash (/) is URL structural hierarchy
  }

  getName() {
    return this.#name;
  }

  getDirNodeURLPath() {
    return this.dirNodeURLPath;
  }

  getDescription() {
    return this.description;
  }
}

export class Directory extends DirectoryNode {
  // children directory of directory entry
  #children: Directory[] | null = null;
  // list of material in the directory entry
  #material: Material[] | null = null;

  protected dirName: string;

  protected readmePath: string;

  constructor(directoryEntry: string) {
    super(directoryEntry);

    this.dirName = this.getName();

    // README.md file is an anchor that directoryEntry is directory material
    this.readmePath = path.join(directoryEntry, "README.md");

    // if readme exist, get metadata of readme file to define the
    // context of Material that the directory is contain
    if (fs.existsSync(this.readmePath)) {
      const readmeContent = fs.readFileSync(this.readmePath, "utf-8");
      const parsedMetadata = frontMatter<MDFileMetadata>(readmeContent);
      this.metadata = parsedMetadata.attributes;
    }
  }

  getDescription(): string | undefined {
    return this.metadata.description;
  }

  getDirNodeURLPath(): string {
    return this.dirNodeURLPath;
  }

  getChildrenDirectory() {
    if (this.#children) return this.#children;

    const dirents = fs.readdirSync(this.dirNodePath, { withFileTypes: true });
    // fs.Dirent (directory entry) used to simplify checking if given name
    // is directory or file

    this.#children = dirents
      .filter((dir) => {
        return dir.isDirectory();
      })
      .map((dir) => {
        // create new Directory object as directory entry for the children
        // current directory: path/to/dir
        // create children as new directory: path/to/dir/children-name
        return new Directory(path.join(this.dirNodePath, dir.name));
      });

    return this.#children;
  }

  /**
   * 
   * @param limit number of file you want to invoke
   * @returns 
   */
  getContentList(limit?: number) {
    let materials = fs
      .readdirSync(this.dirNodePath, { withFileTypes: true })
      .filter((onlyMDMaterial) => onlyMDMaterial.isFile())
      .filter((excludeTSX) => !excludeTSX.name.endsWith(".tsx"))
      .slice(0)
      .map((material) => {
        return new Material(path.join(this.dirNodePath, material.name));
      });

    // load metadata for each file, used to sort by date
    // materials.forEach(m => m.getMetadata())

    materials.sort((a, b) => {
      const dateA = new Date(a.getMetadata()?.date ?? 0).getTime();
      const dateB = new Date(b.getMetadata()?.date ?? 0).getTime();
      return dateB - dateA;
    });

    this.#material = limit ? materials.slice(0, limit) : materials;

    return this.#material;
  }
}

export class Material extends DirectoryNode {
  protected materialPath: string;
  protected fileName: string;

  constructor(entryPath: string) {
    super(entryPath);

    // log.logFlow("Inspect .md doubling", entryPath)

    this.fileName = this.getName();
    // this.materialPath = entryPath.concat(".md");
    this.materialPath = entryPath;
  }

  getMetadata() {
    const materialContent = fs.readFileSync(this.materialPath, "utf-8");
    // log.logFlow("check directory address", materialContent)
    const parsedMetadata = frontMatter<MDFileMetadata>(materialContent);
    this.metadata = parsedMetadata.attributes;

    return this.metadata;
  }
}
