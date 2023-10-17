import Head from "next/head";
import MainPage from "../components/Main/MainPage";

function HomePage() {
  return (
    <div>
      <Head>
        <title>NextJS Capstone Design</title>
        <meta name="description" content="SKHU Capstone Design Project" />
      </Head>
      <MainPage />
    </div>
  );
}

export default HomePage;
