import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigaion.module.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import { throttle } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  const prevScrollY = useRef(0); // 스크롤 이전 Y값 제어
  const [visible, setVisible] = useState(true); // visible이라는 변수에 기본값으로 true 설정

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY; // 스크롤의 현재 Y값 제어
        console.log("이전 Y축", prevScrollY.current);
        console.log("현재 Y축", currentScrollY);

        if (prevScrollY.current < currentScrollY) {
          // 전 Y축값보다 현재 값이 더 크다면 (스크롤을 위로 올릴 때)
          setVisible(false); // visible변수에 false 값 선언
        } else {
          // 아니면 (스크롤을 아래로 내릴 때)
          setVisible(true); // visible 변수에 true 값 선언
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
          <li>
            <Link
              href="/"
              className={`${classes.link_style} ${
                router.pathname === "/" ? classes.hotpink : classes.black
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/c1"
              className={`${classes.link_style} ${
                router.asPath === "/portfolio/pokemon-type-cal"
                  ? classes.hotpink
                  : classes.black
              }`}
            >
              Pokemon
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/c2"
              className={`${classes.link_style} ${
                router.asPath === "/portfolio/c2"
                  ? classes.hotpink
                  : classes.black
              }`}
            >
              Mireu
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/c3"
              className={`${classes.link_style} ${
                router.asPath === "/portfolio/c3"
                  ? classes.hotpink
                  : classes.black
              }`}
            >
              KoWoon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
