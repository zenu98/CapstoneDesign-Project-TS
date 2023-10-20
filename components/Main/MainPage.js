import Link from "next/link";
import classes from "./MainPage.module.css";
import Image from "next/image";
import MainNav from "../UI/layout/main-nav";
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
                  src={`/img/c2/김가영님사진2.jpg`}
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
          {/* <div
            className={classes.main_contents_image}
            onMouseOver={() => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                setIsHovering(1);
              }, 100);
            }}
            onMouseOut={() => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                setIsHovering(0);
              }, 100);
            }}
          >
            <Link href="/portfolio/pokemon-type-cal">
              <Image
                fill
                className={`${classes.main_image} ${
                  isHovering === 1
                    ? classes.main_image_mouseover
                    : classes.main_image_mouseout
                }`}
                src={`/img/c2/김가영님사진2.jpg`}
                alt="c2Main"
              />
              <div
                className={`${
                  isHovering === 1
                    ? classes.slide_layer_on
                    : classes.slide_layer_off
                }`}
              >
                <span className={classes.layer_span}>Ga</span>
                <span className={classes.layer_span}>Young</span>
              </div>
            </Link>
          </div>

          <div
            className={classes.main_contents_image}
            onMouseOver={() => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                setIsHovering(2);
              }, 100);
            }}
            onMouseOut={() => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                setIsHovering(0);
              }, 100);
            }}
          >
            <Link href="/portfolio/c2">
              <Image
                fill
                className={`${classes.main_image} ${
                  isHovering === 2
                    ? classes.main_image_mouseover
                    : classes.main_image_mouseout
                }`}
                src={`/img/c1/이미지11_8086_8086.png`}
                alt="c1Main"
              />

              <div
                className={`${
                  isHovering === 2
                    ? classes.slide_layer_on
                    : classes.slide_layer_off
                }`}
              >
                <span className={classes.layer_span}>Mireu</span>
              </div>
            </Link>
          </div>
          <div
            className={classes.main_contents_image}
            onMouseOver={() => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                setIsHovering(3);
              }, 100);
            }}
            onMouseOut={() => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                setIsHovering(0);
              }, 100);
            }}
          >
            <Link href="/portfolio/c3">
              <Image
                fill
                className={`${classes.main_image} ${
                  isHovering === 3
                    ? classes.main_image_mouseover
                    : classes.main_image_mouseout
                }`}
                src={`/img/c3/kowoonMain.jpg`}
                alt="dummy"
              />
              <div
                className={`${
                  isHovering === 3
                    ? classes.slide_layer_on
                    : classes.slide_layer_off
                }`}
              >
                <span className={classes.layer_span}>Go</span>
                <span className={classes.layer_span}>Woon</span>
              </div>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
