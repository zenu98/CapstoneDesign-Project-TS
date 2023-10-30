import { PageProps } from "../../lib/model";
import PostContents from "./post_content";
import { useState, useEffect } from "react";

const Post: React.FC<PageProps> = (props) => {
  const { post, db } = props;
  const [pos, setPos] = useState(0);

  useEffect(() => {
    function onScroll() {
      setPos(window.scrollY);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <PostContents post={post} pos={pos} db={db} />;
};

export default Post;
