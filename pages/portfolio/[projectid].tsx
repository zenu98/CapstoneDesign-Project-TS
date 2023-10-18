import Detail from "../../components/Detail";
import path from "path";
import fs from "fs/promises";
import Head from "next/head";

import Layout from "../../components/UI/layout/Layout";
import { GetStaticProps } from "next";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
const SelectedPortpoiloPage = (props) => {
  return (
    <Layout>
      <Head>
        <title>SKHU Capstone Design-</title>
        <meta name="description" />
      </Head>
      <Detail post={props.post} />
    </Layout>
  );
};

// async function getData() {
//   const filePath = path.join(process.cwd(), "data", "dummy-data.json");
//   const jsonData = await fs.readFile(filePath, "utf-8");
//   const data = JSON.parse(jsonData);

//   return data;
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { projectid } = params;

  const postData = getPostData(projectid);

  return {
    props: {
      post: postData,
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
