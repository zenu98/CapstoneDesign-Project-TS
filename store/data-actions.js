import { dataActions } from "./data-slice";
import { MongoClient } from "mongodb";
export function getDBs() {
  return async (dispatch) => {
    const getDBs = async () => {
      console.log("123");
      const client = await MongoClient.connect(
        "mongodb+srv://Seo:5GexqTGPY0cnBGfP@cluster0.hgiisqy.mongodb.net/post?retryWrites=true&w=majority"
      );
      const db = client.db();
      console.log("456");
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
      }));
      console.log(postArray);
      client.close();

      return postArray;
    };
    try {
      const abc = await getDBs();
      console.log("123");

      dispatch(
        dataActions.setData({
          abc,
        })
      );
    } catch (error) {}
  };
}
