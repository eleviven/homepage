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
import GithubAPI from "../lib/github-api";
import { DEVELOPER } from "../constants";

export const getStaticProps = async () => {
  const articles = await client.getEntries({
    content_type: "articles",
    limit: 10,
    order: "-sys.createdAt",
    "fields.hide": false,
  });
  const projects = await client.getEntries({
    content_type: "projects",
    order: "-sys.createdAt",
  });
  const githubUser = await GithubAPI.get.user(DEVELOPER.SOCIAL.GITHUB.USERNAME);
  return {
    props: {
      articles,
      projects,
      githubUser,
    },
    revalidate: 10,
  };
};

export default function Home({ articles, projects, githubUser }) {
  const router = useRouter();

  return (
    <main>
      <Head />
      <IntroBlock
        title={`I'm ${DEVELOPER.NAME}`}
        image={DEVELOPER.IMAGE}
        description={DEVELOPER.DESCRIPTION}
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
                title={`${githubUser?.followers} following`}
                variant="success"
                size="large"
                accessoryLeft={
                  <DEVELOPER.SOCIAL.GITHUB.ICON className="w-5 h-5" />
                }
                tabIndex="-1"
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
