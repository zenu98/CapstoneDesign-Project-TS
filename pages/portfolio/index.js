// import Detail from "@/components/Detail";
// import path from "path";
// import fs from "fs/promises";

// const PortpoiloPage = (props) => {
//   const { clients } = props;

//   return (
//     <>
//       <Detail description={clients[1].description} />
//     </>
//   );
// };

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "data", "dummy-data.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       clients: data.clients,
//     },
//   };
// }

// export default PortpoiloPage;
