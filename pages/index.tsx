import Head from "next/head";
import { getAllDB } from "../lib/posts-util";
import MainPage from "../components/main/main_page";
import { GetStaticProps } from "next";
import { PageProps } from "../lib/model";

import { useRef } from "react";

const HomePage: React.FC<PageProps> = ({ featuredProjects, allData }) => {
  const stickyElement = useRef(null);
  return (
    <>
      <Head>
        <title>NextJS Capstone Design</title>
        <meta name="description" content="SKHU Capstone Design Project" />
      </Head>

      <main>
        <MainPage featuredProjects={featuredProjects} allData={allData} />
      </main>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const allData = await getAllDB();
  const featuredProjects = allData.filter((data) => data.featured === true);
  const sortedDatas = allData.sort((a, b) => (a.date > b.date ? 1 : -1));

  return {
    props: {
      featuredProjects,
      allData: sortedDatas,
    },
  };
};
export default HomePage;
