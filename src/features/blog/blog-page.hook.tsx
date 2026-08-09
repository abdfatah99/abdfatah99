import config from "@/src/utils/config";
import { Directory, Material } from "@/src/utils/node";
import { BlogPost } from "./blog-page.types";
import { MDFileMetadata } from "@/src/utils/node.types";

/**
 * Get all blog from blog base directory
 *
 * All blog material is listed on blog base directory. Use blog base directory
 * as root node and instanciate Directory class on top of it then use the
 * .getContentList() method from the Directory class to list all blog material
 *
 * @returns Material[] - list of blog content (markdown)
 */
export function getBlog(): MDFileMetadata[] {
  const blogDirectory = new Directory(config.blogBase);
  const blogPosts: Material[] = blogDirectory.getContentList({ readme: false });


  const posts: MDFileMetadata[] = blogPosts.map(
    (blogPost: Material): MDFileMetadata => {
      const metadata = blogPost.getMetadata();
      return {
        title: blogPost.getTitle(),
        description: blogPost.getDescription(),
        date: metadata.date,
        author: metadata.author,
        url: blogPost.getDirNodeURLPath(),
      };
    },
  );

  return posts;

}
