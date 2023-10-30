import Link from "next/link";
import Logo from "./logo";
import classes from "./main_nav.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const navigationItems = [
  { path: "/", text: "Home" },
  { path: "/portfolio/pokemon-type-cal", text: "Pokemon" },
  { path: "/portfolio/project-aa", text: "ProjectAA" },
  { path: "/portfolio/word-puzzle", text: "Puzzle" },
];

const MainNav = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`${classes.link_style} ${
                router.pathname === item.path ? classes.hotpink : classes.black
              }`}
            >
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default MainNav;
