/**
 * Transformer for actual node class into JSON structured data
 * Transformer Node instance into JSON structured data
 */

import { Directory } from "./node";

/**
 * Structure for UI to draw the tree
 *
 * Inspiration: https://github.com/neigebaie/shadcn-ui-tree-view
 */
interface TreeNode {
  id: string;
  name: string;
  type: "directory" | "material";
  children?: TreeNode[];
}

/**
 * Get node structure based on given url
 *
 * @param rootPath - url directory -- maybe this system could be serve directly
 * in the URL (page) site at first request.
 */
export function getDirectory(rootPath: string): TreeNode {
  const root = new Directory(rootPath);
  return buildTreeNode(root);
}

/**
 * Aim of this function is to extract the structure of Directory or Material
 * instance 15/08/2026
 *
 * usage
 * 1. general structure, general notes of whole material subject
 *     - called in root (from root)
 * 2. dynamic notes structure,
 *    displayed for every single material
 *     - called in parent material
 *
 * TODO:
 * how far the recursive could go for displaying the children of a node?
 *
 * @param directory
 * @returns
 */
function buildTreeNode(directory: Directory): TreeNode {
  // extract children directory
  const childrenDirectories = directory.getChildrenDirectory();

  // extract material list
  const materials = directory.getContentList();

  return {
    id: directory.getDirNodeURLPath(),
    name: directory.getDirectoryName(),
    type: "directory",
    children: [
      // recurse into subdirectories — same shape, one level deeper
      ...childrenDirectories.map((child) => buildTreeNode(child)),
      // leaf materials — no children of their own
      ...materials.map((material) => ({
        id: material.getDirNodeURLPath(),
        name: material.getFileName(),
        type: "material" as const,
      })),
    ],
  };
}
