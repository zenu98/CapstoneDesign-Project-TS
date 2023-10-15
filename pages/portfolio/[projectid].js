import Detail from "@/components/Detail";
import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import { Fragment } from "react";
import Layout from "@/components/UI/layout/Layout";
const SelectedPortpoiloPage = (props) => {
  const { loadedClient } = props;

  return (
    <Fragment>
      <Layout>
        <Head>
          <title>SKHU Capstone Design-{loadedClient.name}</title>
          <meta name="description" content={loadedClient.description} />
        </Head>
        <Detail loadedClient={loadedClient} />
      </Layout>
    </Fragment>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const clientId = params.projectid;

  const data = await getData();

  const client = data.clients.find((client) => client.id === clientId);

  return {
    props: {
      loadedClient: client,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.clients.map((client) => client.id);

  const pathsWithParams = ids.map((id) => ({ params: { projectid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default SelectedPortpoiloPage;
