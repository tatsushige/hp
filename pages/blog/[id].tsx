import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
// import "github-markdown-css/github-markdown-light.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article >
        <h1 className="text-2xl font-semibold">{postData.title}</h1>
        <div className="text-gray-500 text-sm">
          <Date dateString={postData.date} />
        </div>
        <div
          className="markdown-body py-8 font-sans"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

//paramsはページが動的ルートを利用するためのルートパラメータを持ちます。たとえば、ページ名が [id].js である時、paramsは { id: ...} のように見えます。
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData: {
    date: string;
    title: string;
    id: string;
    contentHtml: string;
  } = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
