import Link from "next/link";
import Logo from "./logo";
import classes from "./main_nav.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const navigationItems = [
  { path: "/", text: "Home" },
  { path: "/portfolio/pokemon-type-cal", text: "Pokemon" },
  { path: "/portfolio/project-aa", text: "Project-AA" },
  { path: "/portfolio/word-puzzle", text: "Puzzle" },
];

const MainNav = () => {
  const router = useRouter();

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
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${classes.link_style} ${
                  router.pathname === item.path
                    ? classes.hotpink
                    : classes.black
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

export default MainNav;
