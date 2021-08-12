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
  DESCRIPTION: "I'm Front end Developer. Sharing what I've learned here",
  DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_URL,
};
