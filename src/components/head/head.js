import NextHead from "next/head";
import { useRouter } from "next/dist/client/router";
import { APP } from "../../constants";

export default function Head({ title, description, keywords, image }) {
  const { asPath } = useRouter();
  const url = APP.DOMAIN + asPath;

  title = title ? `${title} | ${APP.TITLE}` : APP.TITLE;
  if (!description) description = APP.DESCRIPTION;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_EN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={APP.DOMAIN} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image:src" content={image} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
    </NextHead>
  );
}
