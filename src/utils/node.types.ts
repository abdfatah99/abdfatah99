// export type MDFileMetadata = {
//     // markdown file metadata
//     title: string;
//     image: string;
//     description: string;
//     date: string
// }

export interface MDFileMetadata {
  title: string;
  image?: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];

  [key: string]: any;
}

/**
 * Data transaction between layer within the system is not using actual object
 * (instance) of the class, but it use representative object (JSON) containing
 * metadata about the subject of the field
 */
export interface SubjectMetadata {
  title: string;
  image?: string;
  description: string;
  date?: string;
  tags?: string;

  url: string;

  [key: string]: string | undefined;
}

// used to fill card component in display
export interface IContentFile {
  fileName: string;
  path: string;
  urlPath: string;
  metaData: MDFileMetadata;

  content?: string; // Optional: raw markdown content
}

export interface IReadContentDirOptions {
  extension: string;
  includeContent?: boolean;
}

// Declare the function signature
export declare function DirectoryContentReader(
  directoryPath: string,
  options: IReadContentDirOptions,
): IContentFile[];
