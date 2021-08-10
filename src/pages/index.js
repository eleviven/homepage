import { Fragment } from "react";
import { useRouter } from "next/router";
import { IntroBlock, Paragraph, Post, Head, ProjectItem } from "../components";
import { DEVELOPER } from "../constants";

const ARTICLES = [
  {
    title: "Initial article",
    date: new Date(),
    url: "/atricles/initial-article",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <Fragment>
      <Head />
      <IntroBlock
        title={`I'm ${DEVELOPER.NAME}`}
        description="I'm a front end developer. I love sharing what I've learned and learning new things. Years from now, I hope this will be an informative blog for new developers."
        image="/images/eleviven.jpeg"
        className="section"
      />
      <div className="container">
        <Paragraph
          title="Latest Articles"
          showMore={true}
          onClickMore={() => router.push("/blog")}
        />
        <Post.List data={ARTICLES} className="section" />
        <Paragraph title="Projects" />
        <section className="grid grid-cols-3 gap-12 py-3 section">
          <ProjectItem
            icon="🚀"
            title="Notifly"
            description="A custom notification component for react native"
            href="/"
          />
        </section>
      </div>
    </Fragment>
  );
}
