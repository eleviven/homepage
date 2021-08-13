import Image from "next/image";
import { Head, Hero, Paragraph, Post } from "../components";
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
        <div className="grid sm:grid-cols-2 gap-12 mt-8 sm:mt-14">
          {projects?.map((item) => {
            const thumbnail = { ...item.thumbnail?.fields.file };
            if (thumbnail && !new RegExp(REGEXP.PROTOCOL).test(thumbnail.url)) {
              thumbnail.url = "https:" + thumbnail.url;
            }
            return (
              <div key={item.id}>
                <Paragraph title={item.title} accessoryRight={item.icon} />
                <div>
                  <h4 className="text-default text-xl mb-1">
                    {item.description}
                  </h4>
                  <small className="text-base">
                    <i>
                      {`${date.format(
                        item.createdAt,
                        "YYYY"
                      )} — ${item.technologies?.map((i) => ` ${i}`)}`}
                    </i>
                  </small>
                </div>
                <div className="mt-6">
                  <Image
                    src={thumbnail.url}
                    alt={thumbnail.title}
                    layout="responsive"
                    {...thumbnail.details.image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
