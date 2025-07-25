/**
 * source: https://github.com/remarkjs/remark-frontmatter?tab=readme-ov-file#example-frontmatter-as-metadata
 * 
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFile} VFile
 */

import {matter} from 'vfile-matter'

/**
 * Parse YAML frontmatter and expose it at `file.data.matter`.
 *
 * @returns
 *   Transform.
 */
export default function myUnifiedPluginHandlingYamlMatter() {
  /**
   * Transform.
   *
   * @param {Node} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree: any, file: any){
    matter(file)
  }
}