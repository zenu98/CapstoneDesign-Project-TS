import classes from "./all_post.module.scss";
import PostsGrid from "./posts_grid";

const AllPosts = (props) => {
  console.log(props.allData);
  return (
    <section className={classes.posts}>
      <h1>Others</h1>
      <PostsGrid posts={props.allData} />
    </section>
  );
};

export default AllPosts;
