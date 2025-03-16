import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import WOLLEM_1 from "../assets/wollem_1.webp";
import WOLLEM_2 from "../assets/wollem_2.webp";
import WOLLEM_3 from "../assets/wollem_3.webp";
import YUILEARN_1 from "../assets/YuiLearn_1.webp";
import YUILEARN_2 from "../assets/YuiLearn_2.webp";
import YUILEARN_3 from "../assets/YuiLearn_3.webp";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  colors: { primary: string; secondary: string };
  images: Array<ImageProps["src"]>;
  comingSoon: boolean;
};

const YUI_LEARN: Project = {
  title: "Czech app",
  description:
    "An application to learn a Czech language. Powered with Ai, you can practice words, declensions and writing skills. Ai will evaluate the stuff you write and give you scores so you can level up.",
  tags: [],
  link: "https://czech.yuivae.com",
  colors: {
    primary: colors.backgroundHover.default,
    secondary: colors.secondary.darkTheme,
  },
  images: [YUILEARN_1, YUILEARN_2, YUILEARN_3],
  comingSoon: false,
};

const WOLLEM_SHOP: Project = {
  title: "Wollem Jewelry",
  description:
    "Wollem is a jewelry brand founded in Prague. The website presents the merchandise along with all the information, provides filtering and search features. It also provides blog posts. The posts and the product data come from separate databases I created.",
  tags: [],
  link: "https://wollem.com",
  colors: colors.wollem,
  images: [WOLLEM_1, WOLLEM_2, WOLLEM_3],
  comingSoon: false,
};
export const myWorkArray = [WOLLEM_SHOP, YUI_LEARN];
