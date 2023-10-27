import Head from "next/head";

import { getAllDB } from "../lib/posts-util";
import MainPage from "../components/Main/main_page";
import Layout from "../components/UI/layout/Layout";

function HomePage(props) {
  const { featuredProjects } = props;

  return (
    <>
      <Head>
        <title>NextJS Capstone Design</title>
        <meta name="description" content="SKHU Capstone Design Project" />
      </Head>
      <main>
        <MainPage featuredProjects={featuredProjects} />
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const allData = await getAllDB();

  const featuredProjects = allData.filter((data) => data.featured === true);
  return {
    props: {
      featuredProjects,
    },
  };
};
export default HomePage;
