import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Hero, Head } from "../components/";
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
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      const language = "javascript";
      return (
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          className={`language-${language}`}
        >
          {text}
        </SyntaxHighlighter>
      );
    },
  },
};

export default function Page({ article }) {
  if (!article) {
    return "Loading...";
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
        <article className="py-8 sm:py-12">
          <div className="container">
            {documentToReactComponents(content, contentOptions)}
          </div>
        </article>
      </main>
    );
  }
}
