import Head from "next/head";
import MainPage from "../components/Main/MainPage";
import { getAllDB } from "../lib/posts-util";

function HomePage(props) {
  const { featuredProjects } = props;

  return (
    <div>
      <Head>
        <title>NextJS Capstone Design</title>
        <meta name="description" content="SKHU Capstone Design Project" />
      </Head>
      <MainPage featuredProjects={featuredProjects} />
    </div>
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
