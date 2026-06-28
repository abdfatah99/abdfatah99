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

    [key: string]: any
}

// used to fill card component in display
export interface IContentFile{
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
    options: IReadContentDirOptions
): IContentFile[]

