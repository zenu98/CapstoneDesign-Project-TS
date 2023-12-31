import Link from "next/link";
import classes from "./main_page.module.scss";
import Image from "next/image";
import MainNav from "../../UI/layout/main_nav";
import { useState } from "react";
import Footer from "../../UI/layout/Footer";
import { PageProps } from "../../../lib/model";
import AllPosts from "./all_post";
import ScrollToTop from "../../UI/button/scrollToTop";
import { nanum } from "../post/post_content";
const MainPage: React.FC<PageProps> = (props) => {
  const { featuredProjects, allData } = props;

  const [isHovering, setIsHovering] = useState(null);
  let timeoutId: NodeJS.Timeout;
  return (
    <div id={classes.wrap}>
      <MainNav />
      <section className={classes.section}>
        <div className={classes.logo_container}>
          <div className={classes.logo_contents}>
            <Image
              fill
              src={`/images/logo/logo.jpg`}
              className={`${classes.logo_image} `}
              alt="logo"
              priority={true}
            />
            <span>Seo</span>
            <span>/</span>
            <span>Portfolio Blog</span>
          </div>
        </div>
        <div className={classes.main_contents_container}>
          {featuredProjects.map((item) => (
            <div
              key={item.id}
              className={classes.main_contents}
              onMouseOver={() => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                  setIsHovering(item.id);
                }, 100);
              }}
              onMouseOut={() => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                  setIsHovering(0);
                }, 100);
              }}
            >
              <Link href={`/portfolio/${item.projectid}`}>
                <Image
                  fill
                  className={`${classes.main_image} ${
                    isHovering === item.id ? classes.mouseover : ""
                  }`}
                  src={`/images/posts/${item.projectid}/${item.projectid}.png`}
                  alt="c2Main"
                  sizes="(max-width: 1024px) 90vw, 60vw"
                  priority={true}
                />
                <div
                  className={`${
                    isHovering === item.id
                      ? classes.slide_layer
                      : classes.slide_layer_off
                  }`}
                >
                  <span className={`${classes.layer_span}`}>{item.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <AllPosts allData={allData} />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MainPage;
