import Image from "next/image";
import classes from "./loading_spinner.module.scss";
import { useEffect, useState } from "react";
import { Router } from "next/router";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <div className={classes.loading}>
      <Image
        width={80}
        height={80}
        src={`/images/logo/spinner.gif`}
        alt="logo"
      />
    </div>
  ) : null;
};

export default LoadingSpinner;
