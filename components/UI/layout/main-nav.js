import Link from "next/link";
import Logo from "./logo";
import classes from "./main-nav.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const MainNav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <header className={classes.header}>
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
              className={`${classes.link_style} ${classes.black}`}
            >
              KaYoung
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/c2"
              className={`${classes.link_style} ${classes.black}`}
            >
              Mireu
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/c3"
              className={`${classes.link_style} ${classes.black}`}
            >
              KoWoon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
