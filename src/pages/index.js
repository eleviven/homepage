import React from "react";
import { IntroBlock, Layout, Paragraph, Post } from "../components";
import { DEVELOPER } from "../constants";

export default function Home() {
  return (
    <Layout>
      <IntroBlock
        title={`I'm ${DEVELOPER.NAME}`}
        description="I'm a front end developer. I love sharing what I've learned and learning new things. Years from now, I hope this will be an informative blog for new developers."
        image="/images/eleviven.jpeg"
        className="mb-14"
      />
      <div className="container">
        <Paragraph title="Latest Articles" />
        <Post.List
          data={[{ title: "How to Connect to an API with JavaScript", date: new Date(), url: "/atricles/test" }]}
        />
        <h1 className="mt-10">Home Screen</h1>
      </div>
    </Layout>
  );
}
