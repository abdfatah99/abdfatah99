import TPSDomain from "@/components/templates/personal-notes/TPSDomain";
import config from "@/lib/constants";
import { Logger } from "@/lib/logging";
import fs from "fs";
import path from "path";

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
  const content = fs.readdirSync(path.join(config.psDomain));
  // console.log("check content [category]/page.tsx:", content);

  // domain representing broader scope like programming-language, database etc
  const domain = content.map((value: string, index: number) => {
    const domain_item =
      value == undefined
        ? ""
        : value
            .replace(/\.[a-z0-9]+$/i, "") // ① Remove file extension
            .replace(/[^a-z0-9_]+/gi, "-") // ② Replace non-alphanumerics with hyphens
            .replace(/^-|-$/g, "") // ③ Trim hyphens from start/end
            .toLowerCase();
    return { domain: domain_item };
  });

  // console.log("check category [category]/page.tsx:", domain);

  // return [{ category: '1' }, { category: '2' }, { category: '3' }]
  return domain;
}

export default async function Page({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  console.log("domain id: ", domain);

  log.logFlow("getting slug from dynamic page", { domain });

  /**
   * 1. get list of domain (directory)
   * 2. diplay README in the first section of the page
   */

  const normalizeDomain = domain.replace(/-/g, " ")
  console.log(normalizeDomain)

  const domain_list = fs.readdirSync(path.join(config.psDomain, normalizeDomain));
  log.logFlow("Get list of domain in the directory:", domain_list);

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
      <TPSDomain domain={domain_list}/>
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
