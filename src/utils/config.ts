import path from "path";

const config = {
  navbarMenu: [
    {
      name: "About Me",
      id: "#Home",
      link: "about-me",
    },
    {
      name: "Personal Notes",
      id: "#personal-notes",
      link: "personal-notes",
    },
    {
      name: "Blog",
      id: "#blog",
      link: "blog",
    },
  ],
  psBase: "personal-notes/",
  // psBasePath: "personal-notes", // relative to "src"
  // psHomePath: path.join(process.cwd(), "src", "personal-notes"),
  psAllowedExtensions: [".md", ".mdx"],
  blogBase: "blog/",
};

export default config;
