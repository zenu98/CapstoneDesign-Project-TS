import DetailC1 from "./post_content";
import { useState, useEffect } from "react";

const Post = (props) => {
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

  return <DetailC1 post={post} pos={pos} db={db} />;
};

export default Post;
