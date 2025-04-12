import { Logger } from "@/lib/logging";
import fs from "fs";
import path from "path";

const log = new Logger("src/app/personal-notes/[category]/page.tsx")

export const dynamicParams = false


export function generateStaticParams() {
  const content = fs.readdirSync(
    path.join('src', 'personal-notes', 'content')
  ) 

  

  return [{ category: '1' }, { category: '2' }, { category: '3' }]
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  
  console.log("id: ", category) 

  log.logFlow("getting slug from dynamic page", { category })

  return (
    <div>
        category page: { category }
        <p>category data from params, populated via generateStaticParams</p>
    </div>
  )
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
