import DetailC1 from "./UI/DetailC1";
import DetailC2 from "./UI/DetailC2";
import DetailC3 from "./UI/DetailC3";
import { useState, useEffect } from "react";
import Layout from "./UI/layout/Layout";

const Detail = (props) => {
  const { post } = props;

  const [pos, setPos] = useState(0);

  function onScroll() {
    setPos(window.scrollY);
    console.log("스크롤이벤트");
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <DetailC1 post={post} pos={pos} />
    </>
  );
};

export default Detail;
