import Link from "next/link";
import Logo from "./logo";
import classes from "./post_nav.module.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import { throttle } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";

const navigationItems = [
  { path: "/", text: "Home" },
  { path: "/portfolio/pokemon-type-cal", text: "Pokemon" },
  { path: "/portfolio/project-aa", text: "ProjectAA" },
  { path: "/portfolio/word-puzzle", text: "Puzzle" },
];

const PostNav = (props) => {
  const { db } = props;
  console.log(db);
  const router = useRouter();
  const prevScrollY = useRef(0); // 스크롤 이전 Y값 제어
  const [visible, setVisible] = useState(true); // visible이라는 변수에 기본값으로 true 설정

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        console.log("이전 Y축", prevScrollY.current);
        console.log("현재 Y축", currentScrollY);

        if (prevScrollY.current < currentScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        prevScrollY.current = currentScrollY;
      }, 250),
    [prevScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`${visible ? classes.header : classes.header_down}`}>
      <div className={classes.logo}>
        <Link href="/" className={classes.link_style}>
          <div className={classes.logo_image}>
            <Image
              fill
              src={`/img/logo.jpeg`}
              className={classes.logo_image}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <nav className={classes.logo}>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${classes.link_style} ${
                  router.asPath === item.path ? classes.hotpink : classes.black
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default PostNav;
