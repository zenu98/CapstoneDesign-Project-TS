import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";
import matter from "gray-matter";
import { PostData, ProjectData } from "./model";

type AllData = ProjectData[];
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // 파일 확장자 제거
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    content,
  };

  return postData;
}
// export function getAllPosts() {
//   const postFiles = getPostsFiles();

//   const allPosts = postFiles.map((postFile) => {
//     return getPostData(postFile);
//   });

//   const sortedPosts = allPosts.sort((postA, postB) =>
//     postA.date > postB.date ? 1 : -1
//   );
//   return sortedPosts;
// }

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);
//   return featuredPosts;
// }
// let cachedSelectedData = null;
// let cachedFeaturedDatas = null;
// export async function getDB(postIdentifier = null) {
//   if (cachedSelectedData === null) {
//     const client = await MongoClient.connect(
//       "mongodb+srv://Seo:5GexqTGPY0cnBGfP@cluster0.hgiisqy.mongodb.net/post?retryWrites=true&w=majority"
//     );
//     const db = client.db();
//     const postCollection = db.collection("postdata");
//     let query = {};

//     if (postIdentifier) {
//       query = { projectid: postIdentifier };
//     }
//     {
//       query = { featured: true };
//     }

//     const posts = await postCollection.find(query).toArray();
//     const postArray = posts.map((db) => ({
//       title: db.title,
//       excerpt: db.excerpt,
//       date: db.date,
//       description: db.description,
//       id: db._id.toString(),
//       projectid: db.projectid,
//       front: db.front,
//       back: db.back,
//     }));

//     client.close();
//     cachedSelectedData = postArray[0];
//     cachedFeaturedDatas = postArray;
//   }

//   if (postIdentifier) {
//     // 반환할 데이터가 특정 프로젝트 정보인 경우, 해당 데이터 반환

//     return cachedSelectedData;
//   } else {
//     // 그렇지 않은 경우, Featured 프로젝트 정보를 반환
//     return cachedFeaturedDatas;
//   }
// }

let allData: AllData | null = null;
export async function getAllDB(): Promise<AllData> {
  if (allData === null) {
    const client = await MongoClient.connect(
      "mongodb+srv://Seo:5GexqTGPY0cnBGfP@cluster0.hgiisqy.mongodb.net/post?retryWrites=true&w=majority"
    );
    const db = client.db();
    const postCollection = db.collection("postdata");

    const posts = await postCollection.find({}).toArray();
    const postArray = posts.map((db) => ({
      title: db.title,
      excerpt: db.excerpt,
      date: db.date,
      description: db.description,
      id: db._id.toString(),
      projectid: db.projectid,
      front: db.front,
      back: db.back,
      featured: db.featured,
    }));

    client.close();
    allData = postArray;
  }

  return allData;
}

// export function findProject(projectid) {
//   const data = allData.find((data) => data.projectid === projectid);
//   return data;
// }
// export function featuredProjects(allData) {
//   const data = allData.filter((data) => data.featured === true);
//   return data;
// }