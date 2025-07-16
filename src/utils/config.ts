import path from "path";

const config = {
  navbarMenu: [
    {
      name: "Home",
      id: "#Home",
      link: "/",
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
};

export default config;
