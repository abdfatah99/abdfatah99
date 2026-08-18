/**
 * 1. what is node?
 * 2. usage of node?
 *
 */

import frontMatter from "front-matter";
import fs from "fs";
import { MDFileMetadata } from "./node.types";
import path from "path";

import { Logger } from "../lib/logging";
import { notFound } from "next/navigation";

const log = new Logger("src/utils/read-directory-content.ts");

abstract class Node {
  protected dirNodePath: string;
  #name: string = "";
  #rawName: string = "";
  // name: used for node name -> file or directory name
  // name: 001 intro to postgresql
  // rawName: 001-intro-to-postgresql.md

  protected dirNodeURLPath: string;
  protected metadata: MDFileMetadata;

  constructor(dirEntryPath: string) {
    this.dirNodePath = dirEntryPath;
    this.#rawName = path.basename(dirEntryPath);
    this.#name = path.basename(dirEntryPath, path.extname(dirEntryPath));
    // default: .basename('/foo/bar/baz/asdf/quux.html') -> output: 'quux.html'
    // mapped with ext: .basename('/foo/bar/001-intro-to-postgre.md', '.md') -> '001-intro-to-postgre'

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

  protected getRawName(): string {
    return this.#rawName;
  }

  /**
   * file or directory name
   * only used for children class (Directory and Material)
   *
   * @returns string
   */
  protected getName(): string {
    return this.#name.replace(/-/g, " ");
  }

  getDirNodeURLPath() {
    return this.dirNodeURLPath;
  }

  getDescription() {
    return this.metadata.description ?? "";
  }
}

/**
 * This class directory returning an instance of the class while the tree structure
 * is need to represent using json structured data
 */
export class Directory extends Node {
  // children directory of directory entry
  #children: Directory[] | null = null;
  // list of material in the directory entry
  #material: Material[] | null = null;

  protected dirName: string;
  protected rawDirName: string;

  protected readmePath: string;

  constructor(directoryEntry: string) {
    super(directoryEntry);

    this.dirName = super.getName();
    this.rawDirName = super.getRawName();

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

  getRawDirectoryName(): string {
    return this.rawDirName;
  }

  getDirectoryName(): string {
    if (this.metadata.title) {
      return this.metadata.title;
    } else {
      return this.dirName;
    }
  }

  /**
   * latest Directory Update
   */
  getDirectoryDate(): string {
    return this.metadata.date;
  }

  /**
   * General flow of creating children
   * 1. go to current directory node path
   * 2. list all directory under current directory node path
   * 3. create a Directory instance for all directory under current directory
   *    node path
   */
  getChildrenDirectory() {
    if (this.#children) return this.#children;

    const entry: fs.Dirent[] = fs.readdirSync(this.dirNodePath, {
      withFileTypes: true,
    });
    // [2] fs.Dirent (directory entry) used to simplify checking if given name
    // is directory or file

    this.#children = entry
      .filter((dir) => {
        // [2.1] get only directory
        return dir.isDirectory();
      })
      .map((dir) => {
        // [3] create new Directory instance for each listed directory
        // current directory node path: path/to/dir
        // create children as new directory: path/to/dir/children-name
        return new Directory(path.join(this.dirNodePath, dir.name));
      });

    return this.#children;
  }

  /**
   *
   * @param limit number of material you want to invoke
   * @returns Material[]
   */
  getContentList({
    limit,
    readme = false,
  }: {
    limit?: number;
    readme?: boolean; // include README.md in the list - default: false
  } = {}) {
    let materials = fs
      // get content of directory
      .readdirSync(this.dirNodePath, { withFileTypes: true })
      // get only file
      .filter((onlyFile: fs.Dirent) => onlyFile.isFile())
      // get only file with markdown extension
      .filter((mdOnly: fs.Dirent) => mdOnly.name.endsWith(".md"))
      .filter((readmeFile: fs.Dirent) => {
        if (readme) return true;
        return readmeFile.name.toLowerCase() !== "readme.md";
      })
      // create Material instance for each md file
      .map((material) => {
        // 1. get full node path
        // 2. combine with file name
        // 3. constructed full material path
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

/**
 * used to display as card
 * for actual rendering, it use a direct import by GetMDModule()
 */
export class Material extends Node {
  protected materialPath: string;
  protected fileName: string;
  protected rawFileName: string;

  // entryPath will always markdown file, because it only created via
  // Directory.getContentList()
  constructor(entryPath: string) {
    super(entryPath);

    // log.logFlow("Inspect .md doubling", entryPath)

    this.fileName = super.getName();
    this.rawFileName = super.getRawName();

    this.materialPath = entryPath;

    if (fs.existsSync(this.materialPath)) {
      const materialContent = fs.readFileSync(this.materialPath, "utf-8");
      const parsedMetadata = frontMatter<MDFileMetadata>(materialContent);
      this.metadata = parsedMetadata.attributes;
    }
  }

  getMetadata() {
    return this.metadata;
  }

  getFileName() {
    return this.fileName;
  }

  getTitle() {
    if (this.metadata.title) {
      return this.metadata.title;
    } else {
      return this.fileName;
    }
  }
}

/**
 * Resolve structure of directory for given URL request
 *
 * return JSON structure of directory (directory metadata) for cross module
 * exchange to make it light, one-time hit at the initialization. cached on
 * local
 */
function DirectoryResolver() {}

/**
 * Resolve structure of Material (markdown) for given URL request
 *
 * return JSON (MDFileMetaData)
 */
function MaterialResolver() {}
