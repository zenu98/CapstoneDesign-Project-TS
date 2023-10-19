import Post from "../../components/pages/post";
import Head from "next/head";
import Layout from "../../components/UI/layout/Layout";
import { GetStaticProps } from "next";
import { getPostData, getPostsFiles, getDB } from "../../lib/posts-util";

const SelectedPortpoiloPage = (props) => {
  const { post, db } = props;
  return (
    <Layout>
      <Head>
        <title>SKHU Capstone Design-</title>
        <meta name="description" />
      </Head>
      <Post post={post} db={db} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { projectid } = params;
  const postData = getPostData(projectid);
  const dbData = await getDB(projectid);
  return {
    props: {
      post: postData,
      db: dbData,
    },
  };
};

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slugValue) => ({ params: { projectid: slugValue } })),
    fallback: false,
  };
}

export default SelectedPortpoiloPage;
