import { PageProps } from "../../../lib/model";

import classes from "./all_post.module.scss";
import PostsGrid from "./posts_grid";

const AllPosts: React.FC<PageProps> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid allData={props.allData} />
    </section>
  );
};

export default AllPosts;
