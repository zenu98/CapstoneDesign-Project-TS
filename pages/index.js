import Head from "next/head";
import MainPage from "../components/Main/MainPage";
import { getDB } from "../lib/posts-util";
function HomePage(props) {
  const { featuredProjects } = props;
  console.log(featuredProjects);
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
  const featuredProjects = await getDB();

  return {
    props: {
      featuredProjects,
    },
  };
};
export default HomePage;
