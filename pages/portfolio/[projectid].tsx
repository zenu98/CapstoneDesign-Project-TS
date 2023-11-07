import Post from "../../components/pages/post/post";
import Head from "next/head";
import Layout from "../../components/UI/layout/Layout";
import { GetStaticProps } from "next";
import { getPostData, getPostsFiles, getAllDB } from "../../lib/posts-util";
import { PageProps } from "../../lib/model";

const SelectedPortpoiloPage: React.FC<PageProps> = (props) => {
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
  const mdContent = getPostData(projectid as string);

  const allData = await getAllDB();
  const project = allData.find((data) => data.projectid === projectid);

  // const featuredProjects = await getDB();

  return {
    props: {
      post: mdContent,
      db: project,

      // featuredProjects,
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
