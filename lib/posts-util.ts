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
      link: db.link,
    }));

    client.close();
    allData = postArray;
  }

  return allData;
}
