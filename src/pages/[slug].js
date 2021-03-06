import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Hero, Head, Paragraph, IntroBlock, Skeleton } from "../components/";
import { DEVELOPER } from "../constants";
import { client } from "../lib/contentful";

export const getStaticPaths = async () => {
  const articles = await client.getEntries({ content_type: "articles" });

  const paths = articles.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const article = await client.getEntries({
      content_type: "articles",
      "fields.slug[in]": params.slug,
      limit: 1,
    });
    if (!article || article.length === 0) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        article: article[0],
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const contentOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      for (let content of node.content) {
        if (content.marks) {
          for (let mark of content.marks) {
            if (mark.type === MARKS.CODE) {
              return <div className="mb-6">{children}</div>;
            }
          }
        }
      }
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <Paragraph children={children} />;
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      const language = "javascript";
      return (
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          className={`language-${language} p-3 sm:p-4`}
        >
          {text}
        </SyntaxHighlighter>
      );
    },
  },
};

export default function Page({ article }) {
  if (!article) {
    return (
      <Fragment>
        <Skeleton.Hero />
        <Skeleton.Article />
      </Fragment>
    );
  } else {
    const { title, description, keywords, content, author, tags, createdAt } =
      article;
    return (
      <main>
        <Head title={title} description={description} keywords={keywords} />
        <Hero
          title={title}
          author={author?.fields.fullname}
          createdAt={createdAt}
          tags={tags}
          description={description}
        />
        <article className="article-content">
          <div className="container">
            {documentToReactComponents(content, contentOptions)}
          </div>
        </article>
        <IntroBlock
          title={DEVELOPER.NAME}
          description={DEVELOPER.DESCRIPTION}
          image={DEVELOPER.IMAGE}
        />
      </main>
    );
  }
}
