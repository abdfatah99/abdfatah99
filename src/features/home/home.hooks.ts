import config from "@/src/utils/config";
import { Directory, Material } from "@/src/utils/read-directory-content";

/**
 *
 * @param limit number of post you want to display
 * @returns
 */
export async function GetBlogPosts(limit?: number) {
  // const blogDirectory = path.join(process.cwd(), "blog")

  const blogDirectory = new Directory(config.blogBase);

  const posts: Material[] = blogDirectory.getContentList(limit);

  // fill each metadata file
  posts.map((post) => {
    post.getMetadata();
  });

  // console.log("list of post")
  // console.log(posts)

  return posts;
}
