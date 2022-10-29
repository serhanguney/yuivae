export enum LINKS {
  GITHUB = "https://github.com/serhanguney",
  LINKEDIN = "https://linkedin.com/in/serhan-guney/",
}

export enum ROUTES {
  MY_WORK = "/#my-work",
  MY_STORY = "/#my-story",
  YUIPASS = "/yuipass",
  BLOG = "/blog",
}

export const listOfLinks = [
  {
    text: "My work",
    link: ROUTES.MY_WORK,
    isAvailable: true,
  },
  {
    text: "My story",
    link: ROUTES.MY_STORY,
    isAvailable: true,
  },
  {
    text: "Yuipass",
    link: ROUTES.YUIPASS,
    isAvailable: true,
  },
  {
    text: "Blog",
    link: ROUTES.BLOG,
    isAvailable: false,
  },
];

export enum API_ROUTES {
  YUIPASS = "/api/yuipass",
}
