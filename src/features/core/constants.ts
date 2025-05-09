export enum LINKS {
  GITHUB = "https://github.com/serhanguney",
  LINKEDIN = "https://linkedin.com/in/serhan-guney/",
}

export const routes = {
  myWork: {
    path: "/#my-work",
    label: "My work",
    key: "my-work",
    isExternal: false,
  },
  myBackground: {
    path: "/#my-background",
    label: "My Background",
    key: "my-background",
    isExternal: false,
  },
  yuipass: {
    path: "/yuipass",
    label: "Yuipass",
    key: "yuipass",
    isExternal: false,
  },
  learnCzech: {
    path: "https://czech.yuivae.com",
    label: "Learn Czech",
    key: "learn-czech",
    isExternal: true,
  },
  soundBoard: {
    path: "https://soundboard.yuivae.com",
    label: "Sound Board",
    key: "sound-board",
    isExternal: true,
  },
} as const;

export enum API_ROUTES {
  YUIPASS = "/api/yuipass",
}
