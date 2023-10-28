import Link from "next/link";
import classes from "./mainPage.module.scss";
import Image from "next/image";
import MainNav from "../UI/layout/main_nav";
import { useState } from "react";

const MainPage = (props) => {
  const { featuredProjects } = props;
  console.log(featuredProjects);

  const [isHovering, setIsHovering] = useState(0);
  let timeoutId;
  return (
    <div id={classes.wrap}>
      <header className={classes.abcd}>
        <MainNav />
      </header>
      <section className={classes.section_container}>
        <div className={classes.logo_container}>
          <div className={classes.logo_contents}>
            <Image
              fill
              src={`/img/굴절.jpeg`}
              className={`${classes.logo_image} `}
              alt="logo"
            />
            <span>SKHU</span>
            <span>/</span>
            <span>Capston Design Team</span>
          </div>
        </div>
        <div className={classes.main_contents}>
          {featuredProjects.map((item) => (
            <div
              key={item.id}
              className={classes.main_contents_image}
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
                    isHovering === item.id
                      ? classes.main_image_mouseover
                      : classes.main_image_mouseout
                  }`}
                  src={`/images/posts/${item.projectid}/${item.projectid}.png`}
                  alt="c2Main"
                />
                <div
                  className={`${
                    isHovering === item.id
                      ? classes.slide_layer_on
                      : classes.slide_layer_off
                  }`}
                >
                  <span className={classes.layer_span}>{item.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
