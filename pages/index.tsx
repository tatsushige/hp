import Head from "next/head";
import React from "react";
import Navigation from "../components/navigation";
import { siteTitle } from "../components/layout";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col gap-8">
        <Navigation />
        <Projects />
      </div>
    </Layout>
  );
}
