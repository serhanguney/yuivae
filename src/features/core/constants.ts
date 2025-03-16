export enum LINKS {
  GITHUB = "https://github.com/serhanguney",
  LINKEDIN = "https://linkedin.com/in/serhan-guney/",
}

export const routes = {
  myWork: {
    path: "/#my-work",
    label: "My work",
    key: "my-work",
  },
  myBackground: {
    path: "/#my-background",
    label: "My Background",
    key: "my-background",
  },
  yuipass: { path: "/yuipass", label: "Yuipass", key: "yuipass" },
  learnCzech: {
    path: "https://czech.yuivae.com",
    label: "Learn Czech",
    key: "learn-czech",
  },
} as const;

export enum API_ROUTES {
  YUIPASS = "/api/yuipass",
}
