import { Head, Hero, Paragraph, Post } from "../components";
import { client } from "../lib/contentful";

export const getStaticProps = async () => {
  const articles = await client.getEntries({
    content_type: "articles",
    order: "-sys.createdAt",
  });
  let articlesGroup = articles?.reduce((acc, i) => {
    const createdAt = new Date(i.createdAt).getUTCFullYear();
    if (!acc[createdAt]) {
      acc[createdAt] = { createdAt, data: [] };
    }
    acc[createdAt].data.push(i);
    return acc;
  }, {});
  articlesGroup = Object.values(articlesGroup);
  return {
    props: {
      articles: articlesGroup,
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
          {articles?.map((group) => (
            <div key={group.createdAt} className="section">
              <Paragraph title={group.createdAt} />
              <Post.List data={group.data || []} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
