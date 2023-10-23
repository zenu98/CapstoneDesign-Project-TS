import Head from "next/head";
import MainPage from "../components/Main/MainPage";
import { getAllDB } from "../lib/posts-util";

function HomePage(props) {
  const { featuredProjects,mdContent } = props;

  return (
    <div>
      <Head>
        <title>NextJS Capstone Design</title>
        <meta name="description" content="SKHU Capstone Design Project" />
      </Head>
      <MainPage featuredProjects={featuredProjects} mdContent={mdContent}/>
    </div>
  );
}
export const getStaticProps = async () => {
  const allData = await getAllDB();
  const mdContent = getPostData(projectid);
  const featuredProjects = allData.filter((data) => data.featured === true);
  return {
    props: {
      featuredProjects,
      mdContent
    },
  };
};
export default HomePage;
