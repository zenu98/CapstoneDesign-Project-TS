import Head from "next/head";
import { getAllDB } from "../lib/posts-util";
import MainPage from "../components/main/main_page";
import { GetStaticProps } from "next";
import { PageProps } from "../lib/model";
const HomePage: React.FC<PageProps> = ({ featuredProjects }) => {
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
};
export const getStaticProps: GetStaticProps = async () => {
  const allData = await getAllDB();

  const featuredProjects = allData.filter((data) => data.featured === true);
  return {
    props: {
      featuredProjects,
    },
  };
};
export default HomePage;
