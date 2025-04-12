I have code like this but it seems not working

```tsx
import fs from 'fs';
import path from 'path';

interface Params {
  slug: string | string[]
}

export async function generateStaticParams(){
  const categories = fs.readdirSync(path.join('src', 'personal-notes', 'content'))
  console.log("[personal-notes > layout > generateStaticParams] categories:", categories)

  return categories.map((category) => ({
    slug: category
  }))
}

export default function PersonalNotesLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params

}) {
  // const [nav, setNav] = useState<string[]>(["Home"]);

  const { slug } = params
  console.log("Slug:", slug)
  console.log(`Params: ${JSON.stringify(params)}`)

  return (
    // <psContentNavContext.Provider value={{ nav, setNav }}>
    //   {/* layout personal notes */}
    //   {children}
    // </psContentNavContext.Provider>
    
    <div>
      {`Params: ${params}`}
      {children}
    </div>
  );
}
```

what I want is
1. when user hit `personal-notes` page, it will display all category of the
   personal notes which is all directory inside `personal-notes/content`. 
   for example if category listed on `personal-notes/content` is:
   ```bash
     ├── personal-notes
     │    ├── content
     │    │   ├── TypeScript
     │    │   │   └── 001-TypeScript.md
     │    │   └── python
     |    │       └── 001-python.md
   ```

   so the `project-notes` page will display `Typescript` and `python` because the
   category inside it exist only typescript and python

