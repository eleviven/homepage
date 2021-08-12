import { useRouter } from "next/router";
import {
  IntroBlock,
  Paragraph,
  Post,
  Head,
  ProjectItem,
  Button,
} from "../components";
import { client } from "../lib/contentful";
import { DEVELOPER } from "../constants";

export const getStaticProps = async () => {
  const articles = await client.getEntries({
    content_type: "articles",
    limit: 10,
    order: "-sys.createdAt",
  });
  const projects = await client.getEntries({
    content_type: "projects",
    order: "-sys.createdAt",
  });
  return {
    props: {
      articles,
      projects,
    },
    revalidate: 10,
  };
};

export default function Home({ articles, projects }) {
  const router = useRouter();
  return (
    <main>
      <Head />
      <IntroBlock
        title={`I'm ${DEVELOPER.NAME}`}
        description="I'm a front end developer. I love sharing what I've learned and learning new things. Years from now, I hope this will be an informative blog for new developers."
        image="/images/eleviven.jpeg"
        className="section"
      >
        <ul className="flex mt-6">
          <li>
            <a
              href={DEVELOPER.SOCIAL.GITHUB.URL}
              target="_blank"
              title={DEVELOPER.SOCIAL.GITHUB.TITLE}
            >
              <Button
                title={DEVELOPER.SOCIAL.GITHUB.TITLE}
                variant="success"
                size="large"
                accessoryLeft={
                  <DEVELOPER.SOCIAL.GITHUB.ICON className="w-5 h-5" />
                }
                tabindex="-1"
              />
            </a>
          </li>
        </ul>
      </IntroBlock>
      <div className="container">
        <Paragraph
          title="Latest Articles"
          showMore={true}
          onClickMore={() => router.push("/blog")}
        />
        <Post.List data={articles} className="section" />
        <Paragraph title="Projects" />
        <section className="grid grid-cols-3 gap-12 py-3 section">
          {projects?.map((item) => (
            <ProjectItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              href={"/" + item.article?.fields.slug}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
