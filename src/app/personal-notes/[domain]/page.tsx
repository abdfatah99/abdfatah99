import TPSDomain from "@/components/templates/personal-notes/TPSDomain";
import constant from "@/lib/constants";
import { Logger } from "@/lib/logging";
import { PSDirectory } from "@/lib/personal-notes-directory";
import fs from "fs";
import path from "path";
import { Dirent } from 'fs';

const log = new Logger("src/app/personal-notes/[domain]/page.tsx");

export const dynamicParams = false;

/**
 * WARNING: Remember the key of object in the returned list-object should be the
 * same as the directory name
 *
 * personal-notes/[category]/page.tsx
 *
 * key: category
 *
 * @returns
 */
export function generateStaticParams() {
  const content = fs.readdirSync(path.join(constant.psHomePath), {
    withFileTypes: true,
  });
  // console.log("check content [category]/page.tsx:", content);

  // domain representing broader scope like programming-language, database etc
  const domain = content
    // filter only for directory
    .filter((directory) => { return directory.isDirectory() })
    // set all directory to become static parameters
    .map((value: Dirent) => {

    const domain_item =
      value == undefined
        ? ""
        : value.name
            .replace(/\.[a-z0-9]+$/i, "") // ① Remove file extension
            .replace(/[^a-z0-9_]+/gi, "-") // ② Replace non-alphanumerics with hyphens
            .replace(/^-|-$/g, "") // ③ Trim hyphens from start/end
            .toLowerCase();

    return { domain: domain_item };
  });

  return domain;
}

/**
 *
 * 1. get domain from parameter of the page function
 * 2. create a PSDirectory class to represent the directory as a class
 * 3.
 *
 * @param param0
 * @returns
 */
export default async function Page({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  log.logFlow("getting slug from dynamic page", { domain });

  /**
   * 1. get list of domain (directory)
   * 2. diplay README in the first section of the page
   */

  const domainURL = domain.replace(/-/g, " ");
  // console.log("Normalize URL:", normalizeDomainURL);

  // const domain_list = fs.readdirSync(
  //   path.join(constant.psHomePath, domainURL),
  // );

  // log.logFlow("Get list of domain in the directory:", domain_list);

  const domainDirectory = new PSDirectory(
    path.join(constant.psHomePath, domainURL),
  );

  // const readme = fs.readdirSync

  return (
    // <div>
    //   category page: {category}
    //   <p>category data from params, populated via generateStaticParams</p>
    // </div>

    /**
     * TODO:
     * - passing domain list to the UI template component
     */
    <div className="container">
      <TPSDomain domain={domainDirectory} />
    </div>
  );
}

/**
 * the Params object id use the same identifier as the directory identifier
 * example:
 * personal-notes > [category] > [slug]
 *
 * then the Params interface type of category is
 * -> interface Params {
 * ->   category: string;
 * -> }
 */
