/**
 * Why given file naming is entry
 * In NodeJS terminology, an entry is representative of directory/file.
 *
 * `entry` in this file used to store all entry manipulation including
 * - entry slug for dynamic page
 * - check entry type? directory : file
 *
 */
import path from "path";
import fs from "fs";
import { Logger } from "@/src/lib/logging";

const log = new Logger("src/utils/entry.ts");

// create slug for dynamic personal-notes page.
export function getAllSlugPathFrom(baseDir: string): string[][] {
  const fullBase = path.join(process.cwd(), baseDir); // absolute path to personal-notes

  function walk(currentDir: string): string[][] {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    const slugs: string[][] = [];

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        // create slug for directory
        // loop over recursively for the directory content
        const directoryRelative = path.relative(fullBase, fullPath);
        const directorySlugArray = directoryRelative
          .split(path.sep)
          .map((e) => {
            return e.toLocaleLowerCase();
          });

        // console.log("Directory Relative:", directoryRelative, typeof(directoryRelative))
        slugs.push(directorySlugArray);

        slugs.push(...walk(fullPath)); // go deeper recursively
      } else if (
        (entry.isFile() && entry.name.toLocaleLowerCase().endsWith(".md")) ||
        entry.name.toLocaleLowerCase().endsWith(".mdx")
      ) {
        // Convert the file path to slug
        const relative = path.relative(fullBase, fullPath); // e.g. 'js/basics/intro.md'
        const slugArray = relative
          .replace(/\.(mdx?|MDX?)$/i, "")
          .split(path.sep)
          .map((e) => e.toLowerCase()); // ['js', 'basics', 'intro']
        slugs.push(slugArray);
      }
    }

    return slugs;
  }

  return walk(fullBase);
}

// usage:
// - Personal Notes dynamic page
// - PSDirectory: checking given path children

/**
 * Check whether a path is directory or file (using extension from config)
 *
 * Usage in this Project:
 * - Personal Notes Dynamic Page
 * - PSDirectory: Checking given path children is file or directory
 *
 * @param inputPath: Raw input string (e.g., "notes/js/intro")
 * @returns "file" | "directory" | "not_found"
 */
export function EntryStatus(
  inputPath: string,
): "directory" | "file" | "not_found" {
  // console.log("input path:", inputPath);
  const fullPath = path.resolve(inputPath);

  // log.logFlow("Resolve path from given url", fullPath);

  try {
    const stats = fs.statSync(fullPath);
    console.log("stas: ", stats);
    if (stats.isDirectory()) return "directory";
    if (stats.isFile()) return "file";
  } catch (err) {
    // Try checking for .md file (for slug-like paths without extension)
    const mdPath = fullPath + ".md";
    try {
      const mdStats = fs.statSync(mdPath);
      // console.log("mdStats: ", mdStats);
      if (mdStats.isFile()) return "file";
    } catch (err2) {
      // Still nothing
      const mdxPath = fullPath + ".mdx";
      try {
        const mdxStats = fs.statSync(mdxPath);
        if (mdxStats.isFile()) return "file";
      } catch (err3) {
        //
      }
    }
  }

  return "not_found";
}

function EntryStatusNew(inputPath: string): "directory" | "file" | "not_found" {
  // 1. get full path
  // 2. check if representative full path is a directory
  // 3. check if representative full path is a file

  const fullPath = path.resolve(inputPath);

  try {
    const dirExist = fs.statSync(fullPath);
    if (dirExist.isDirectory()) return "directory";

    // this code will no be executed, because the url already define only with
    // basename (no extension)
    if (dirExist.isFile()) return "file";
  } catch (err) {
    // 1. get dirname
    // 2. search over the dirname for file
    // 3. select only .md or .mdx file
    const dirName = path.dirname(fullPath);
    const fileBaseName = path.basename(fullPath)

    const listOfFile = fs
      .readdirSync(dirName, { withFileTypes: true })
      .filter( entry => entry.isFile())
      .filter( entry => entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))

    for (const e of listOfFile) {
      const entryBaseName = path.basename(e.path)
      if (entryBaseName == fileBaseName) return "file"
    }

    // if (listOfFile) return "file"
    
    return "not_found";
  }

  return "not_found";
}
