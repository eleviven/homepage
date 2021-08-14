import { SvgGithub } from "../components/icons";

export const DEVELOPER = {
  NAME: "Firuz Haciyev",
  IMAGE: "/images/eleviven.jpeg",
  DESCRIPTION:
    "I'm a front end developer. I love sharing what I've learned and learning new things. Years from now, I hope this will be an informative blog for new developers.",
  SOCIAL: {
    GITHUB: {
      TITLE: "Github",
      URL: "https://github.com/eleviven",
      USERNAME: "eleviven",
      ICON: SvgGithub,
    },
  },
};

export const APP = {
  TITLE: DEVELOPER.NAME,
  DESCRIPTION: "I'm Front end Developer. Sharing what I've learned here",
  DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_URL,
};
