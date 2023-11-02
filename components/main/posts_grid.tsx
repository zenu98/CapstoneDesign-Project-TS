import { PageProps } from "../../lib/model";
import PostItem from "./post-item";
import classes from "./posts-grid.module.scss";

const PostsGrid: React.FC<PageProps> = (props) => {
  const { allData } = props;
  console.log(props);
  return (
    <ul className={classes.grid}>
      {allData.map((post) => (
        <PostItem key={post.id} db={post} />
      ))}
    </ul>
  );
};
export default PostsGrid;
