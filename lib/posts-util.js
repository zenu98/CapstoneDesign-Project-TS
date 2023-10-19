import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // 파일 확장자 제거
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export async function getDB(postIdentifier) {
  const client = await MongoClient.connect(
    "mongodb+srv://Seo:5GexqTGPY0cnBGfP@cluster0.hgiisqy.mongodb.net/post?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postCollection = db.collection("postdata");
  const post = await postCollection
    .find({ projectid: postIdentifier })
    .toArray();
  const postToArray = post.map((db) => ({
    title: db.title,
    excerpt: db.excerpt,
    date: db.date,
    description: db.description,
    id: db._id.toString(),
    front: db.front,
    back: db.back,
  }));
  const dataObj = postToArray[0];
  client.close();
  return dataObj;
}
