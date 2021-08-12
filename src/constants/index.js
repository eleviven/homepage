import { SvgGithub } from "../components/icons";

export const DEVELOPER = {
  NAME: "Firuz Haciyev",
  SOCIAL: {
    GITHUB: {
      TITLE: "Github",
      URL: "https://github.com/eleviven",
      ICON: SvgGithub,
    },
  },
};

export const APP = {
  TITLE: DEVELOPER.NAME,
  DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_URL,
};
