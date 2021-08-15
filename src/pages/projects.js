import { Head, Hero, ProjectCard } from "../components";
import { REGEXP } from "../constants/regexp";
import { client } from "../lib/contentful";
import date from "../lib/date";

export const getStaticProps = async () => {
  const projects = await client.getEntries({
    content_type: "projects",
    order: "-sys.createdAt",
  });
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};

const page = {
  title: "Projects",
  description: "A few highlights of my open-source projects.",
};

export default function Projects({ projects }) {
  return (
    <main>
      <Head {...page} />
      <Hero {...page} />
      <section className="container">
        <div className="grid gap-12 mt-8 sm:mt-14">
          {projects?.map((item) => {
            const actions = [
              { title: "Source", url: item.source },
              { title: "Demo", url: item.demo },
            ];
            const thumbnail = { ...item.thumbnail?.fields?.file };
            if (
              thumbnail?.url &&
              !new RegExp(REGEXP.PROTOCOL).test(thumbnail.url)
            ) {
              thumbnail.url = "https:" + thumbnail.url;
            }
            return (
              <ProjectCard
                key={item.id}
                title={item.icon + " " + item.title}
                description={item.description}
                thumbnail={thumbnail}
                year={date.format(item.createdAt, "YYYY")}
                technologies={item.technologies}
                actions={actions.filter((i) => i.url)}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
