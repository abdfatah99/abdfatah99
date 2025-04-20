# Naming Component

## Template

- Main component start with UPPER letter.
- Supporting component for template start with lower letter.
- If the name contain two root of word, use camelCase.

Example:

- `Home.tsx` This is the main component of `Home` template
- `experience.tsx` This is the supporting component for `Home` template.

# Configuration in A file management

1. All configuration exist in `page.tsx` file.
2. All file under `ui` directory only handle the UI.

## Wrong Example

This is the previous development of the page with page configuration exist in 
the template, not in the `page.tsx`.

**Page.tsx**

```tsx
"use client";
import PersonalNotes from "@/ui/templates/personal-notes/PersonalNotes";
import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
// import { useState } from "react";
import { useContext } from "react";

// here where the context-of-navigation-material exist, because this component
// is the parent of personal-notes-pages;
// - here is the location of Context.provider
// then the children of this page can access the context of the page

function PersonalNotesPage() {
  // const [nav, setNav] = useState<string[]>(["Home"]);
  const navigationValue = useContext(psContentNavContext)
  return (
    // <psContentNavContext.Provider value={{ nav, setNav }}>
      <PersonalNotes />
    // </psContentNavContext.Provider>
  );
}
export default PersonalNotesPage;

```

**Template.tsx**

```tsx
import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
import { Button } from "@/ui/atom/button";
import CardTypeOne from "@/ui/mollecule/card/1_cardTypeOne";
import CardDisplayOne from "@/ui/mollecule/card/ExperienceCard";
import ContentNavigation from "@/ui/mollecule/notes-content-navigation";
import Navbar from "@/ui/organism/Navbar";
import React, { useContext } from "react";

// here where you have to update the personal notes context

function PersonalNotes({ children }: any) {
  const navigationValue = useContext(psContentNavContext);

  if (!navigationValue) {
    throw new Error("psContentNavContext is not provided");
  }

  const { nav, setNav } = navigationValue;

  const updateNav = (newNavItem: string) => {
    setNav((prevNav) => [...prevNav, ` > ${newNavItem}`]);
  };

  const reduceNav = () => {
    setNav((prevNav) => prevNav.slice(0, -1));
  };

  return (
    <>
      <Navbar />
      {/* Content Navigation
      
      <ContentNavigation nav={nav}></ContentNavigation>
      <Button onClick={() => updateNav()}>update nav</Button>
      <Button onClick={() => reduceNav()}>reduce nav</Button> 
      */}

      <div className="container">
        <p className="my-2 text-xs text-slate-500">Fatah Personal Notes</p>

        <p className="text-2xl font-semibold">Database</p>

        <div className="mt-3">
          <CardTypeOne
           image="/personal-notes/sql-server.png"
           title="SQL Server"
           desc="Enterprise Database Solution by Microsoft"
           goto="/personal-notes/database"
           link="/personal-notes/database"
           onClick={() => updateNav('database')}
           />
        </div>
      </div>
    </>
  );
}

export default PersonalNotes;
```

As you can see, the configuration for the navigation exist in the `template` file,
this is not pure for the development. All page configuration should live under
`page.tsx` and the `template` only handle the UI. 

