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

import fs, { Dirent } from "fs";
import path from "path";
import frontMatter from "front-matter";

export class PSDirectory {
  //   #ListOfDirectory: PSDirectory[] = [];
  // readonly Children: Dirent[];
  #children: PSDirectory[] | null = null;
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
    this.urlPath =
      "/" +
      directoryPath
        .split("\\") // `\\` used because of window. window -> \; posix -> /
        .slice(1) // remove 'src'
        .map((value) => value.replace(/[^a-z0-9_]+/gi, "-").toLocaleLowerCase())
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

    // get list of directory then create it as PSDirectory class
    // const Children = fs.readdirSync(directoryPath, { withFileTypes: true });
    // // this.Directory = new PSDirectory(directoryPath)
    // console.log("Actual Dirent Class", Children)

    // for (let dir of Children) {
    //   if (dir.isDirectory() && dir.path) {
    //     this.#ListOfDirectory.push(
    //       new PSDirectory(path.join(directoryPath, dir.name)),
    //     );
    //   }
    // }
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
  getStatus(): "directory" | "file" {
    const directoryStatus = fs.statSync(this.fullPath);
    return directoryStatus.isDirectory() ? "directory" : "file";
  }

  /**
   * Link to the page that represent content of this directory/file
   */
  getLink() {
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

    if (this.#children) return this.#children;

    const dirents = fs.readdirSync(this.fullPath, { withFileTypes: true });
    this.#children = dirents
      .filter((dir) => dir.isDirectory())
      .map((dir) => new PSDirectory(path.join(this.fullPath, dir.name)));

    return this.#children;
  }
}

/**
 *
 * Input: directory path
 * Output: directory class of given directory path
 *
 * Output Property
 * - class of directory path
 * - if the directory path contain a directory, make that children directory
 *   as part of the class with method -> .childrenDir()
 */
function getDirectory(dirPath: string) {
  // 1. create 'given directory' as a class
  // 2. check if 'given directory' has children directory?
  //    if it has, create the children directory as a class
  const directory = new PSDirectory(dirPath);

  const hasChildren = fs.readdirSync(dirPath, { withFileTypes: true });

  if (hasChildren) {
  }
}
