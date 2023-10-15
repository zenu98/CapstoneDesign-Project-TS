import DetailC1 from "./UI/DetailC1";
import DetailC2 from "./UI/DetailC2";
import DetailC3 from "./UI/DetailC3";
import { useState, useLayoutEffect, useMemo } from "react";
import Layout from "./UI/layout/Layout";

const Detail = (props) => {
  const loadedClient = props.loadedClient;
  const id = loadedClient.id;

  const [pos, setPos] = useState(0);

  function onScroll() {
    setPos(window.scrollY);
    console.log("스크롤이벤트");
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {id === "c1" && <DetailC1 loadedClient={loadedClient} pos={pos} />}
      {id === "c2" && <DetailC2 loadedClient={loadedClient} pos={pos} />}
      {id === "c3" && <DetailC3 loadedClient={loadedClient} pos={pos} />}
    </>
  );
};

export default Detail;
