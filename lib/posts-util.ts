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
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    content,
  };

  return postData;
}

let client: MongoClient;
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.hgiisqy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
let allData: { data: AllData; timestamp: number } = null;
const cacheTimeout = 5 * 60 * 1000;
export async function getAllDB(): Promise<AllData> {
  if (allData && Date.now() - allData.timestamp < cacheTimeout) {
    return allData.data;
  }

  client = await MongoClient.connect(connectionString);
  const db = client.db();
  const postCollection = db.collection("postdata");

  const [posts] = await Promise.all([postCollection.find({}).toArray()]);
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
    link: db.link,
  }));
  allData = {
    data: postArray,
    timestamp: Date.now(),
  };

  client.close();

  return postArray;
}
