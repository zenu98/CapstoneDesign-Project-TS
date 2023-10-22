import Post from "../../components/pages/post";
import Head from "next/head";
import Layout from "../../components/UI/layout/Layout";
import { GetStaticProps } from "next";
import { getPostData, getPostsFiles, getDB } from "../../lib/posts-util";

const SelectedPortpoiloPage = (props) => {
  const { post, project, featuredProjects } = props;
  console.log(featuredProjects);
  return (
    <Layout>
      <Head>
        <title>SKHU Capstone Design-</title>
        <meta name="description" />
      </Head>
      <Post post={post} db={project} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const { projectid } = params;
  const mdContent = getPostData(projectid);

  const project = await getDB(projectid);

  // const featuredProjects = await getDB();

  return {
    props: {
      post: mdContent,
      project,
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
