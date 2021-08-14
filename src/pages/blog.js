import { Head, Hero, Paragraph, Post } from "../components";
import { client } from "../lib/contentful";

export const getStaticProps = async () => {
  const articles = await client.getEntries({
    content_type: "articles",
    order: "-sys.createdAt",
  });
  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
};

const page = {
  title: "Blog",
  description: "Sharing my experiences here",
};

export default function Blog({ articles }) {
  return (
    <main>
      <Head {...page} />
      <Hero {...page} />
      <section className="container">
        <div className="mt-8 sm:mt-14">
          <Post.List data={articles} isGroup={true} />
        </div>
      </section>
    </main>
  );
}
