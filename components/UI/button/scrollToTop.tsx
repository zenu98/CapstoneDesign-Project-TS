import { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./scrollToTop.module.scss";
const ScrollToTop = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return toggleBtn ? (
    <IoIosArrowDropupCircle onClick={goToTop} className={classes.toTop} />
  ) : null;
};

export default ScrollToTop;
