import Head from "next/head";
import { siteTitle } from "../../components/layout";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";
import Navigation from "../../components/navigation";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col gap-6">
        <Navigation />
        <ul className="flex flex-col gap-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="flex gap-4">
              <div>
                <Link href={`/blog/${id}`}>
                  <a className="hover:text-blue-500 hover:underline hover:underline-offset-4 py-1">
                    {title}
                  </a>
                </Link>
                <br />
                <small className="text-gray-400">
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: {
    date: string;
    title: string;
    id: string;
  }[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
