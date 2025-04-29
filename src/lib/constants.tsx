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
  psDomain: path.join("src", "personal-notes"),
};

export default config;
