import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../Detail.module.css";
import styles from "./DetailC3.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Footer from "./layout/Footer";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Range } from "react-range";

const DetailC3 = (props) => {
  const pos = props.pos;
  const loadedClient = props.loadedClient;
  console.log(loadedClient.contents);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const linkClickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  const handleSlideChange = (e) => {
    const newIndex = parseInt(e.target.value, 10);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(newIndex);
      setSlideIndex(newIndex);
    }
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className={`${styles.arrowDiv} ${styles.arrowLeft}`}
        onClick={onClick}
      >
        <SlArrowLeft className={styles.arrow} />
      </button>
    );
  };
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className={`${styles.arrowDiv} ${styles.arrowRight}`}
        onClick={onClick}
      >
        <SlArrowRight className={styles.arrow} />
      </button>
    );
  };
  const settings = {
    dots: false,
    // dotsClass: styles.customDots,
    // customPaging: (i) => (
    //   <img
    //     src={loadedClient.contents[i]}
    //     alt={`slide-${i}`}
    //     className={styles.customDotImage}
    //   />
    // ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: () => setUpdateCount((prevCount) => prevCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div>
      <div className={classes.background}>
        <Image
          className={classes.mainimag}
          src={`${loadedClient.contents[8]}`}
          alt="dummy"
          fill
          style={{ transform: `translateY(${pos / 2}px)` }}
        />
      </div>
      <div
        className={classes.container}
        style={{ transform: `translateY(${-pos / 50}px)` }}
      >
        <h1 className={classes.title}>
          KoWoon,
          <span> Capstone design team-project of SKHU</span>
        </h1>
        <div className={`${classes["introContainer"]}`}>
          <div className={`${classes["introBox-left"]}`}>
            <div>
              <h2>Technologies Used</h2>
              <ul className={classes.usedTech}>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Adobe Illustrator</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Adobe InDesign</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Clip Studio Paint</span>
                </li>
              </ul>
            </div>
            {isClicked ? (
              <div onClick={linkClickHandler}>
                <h2>- Link</h2>
                <Image
                  src={`/img/Instagram_icon.png`}
                  alt="insta"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <div onClick={linkClickHandler}>
                <h2>+ Link</h2>
              </div>
            )}
          </div>
          <div className={`${classes["introBox-right"]}`}>
            <p className={classes.introText}>
              로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도
              하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면
              사람들은 전체적인 프레젠테이션 보다는 텍스트에 담긴 뜻에 집중하는
              경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션
              자체에 초점을 맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨은
              영어에서 사용하는 문자들의 전형적인 분포에 근접하다고도 하는데, 이
              점 때문에 프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.
            </p>
          </div>
        </div>

        <h1 className={styles.title}>“ 눈을 감고 잠에 들면 ”</h1>

        <Slider
          ref={sliderRef}
          {...settings}
          className={styles.slider_container}
        >
          {loadedClient.contents.map((data, index) => (
            <div key={data} className={styles.slider_container_contents}>
              <Image
                src={data}
                alt={`slide-${index}`}
                className={styles.slide_image}
                width={2500}
                height={1000}
                style={{
                  borderRadius: "10px",
                  height: "90vh",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
        <div className={styles.goToSlide}>
          <input
            className={styles.customSlide}
            onChange={handleSlideChange}
            value={slideIndex}
            type="range"
            min={0}
            max={13}
          />
        </div>
      </div>
      <div className={`${styles["introBox-right"]}`}>
        <p className={styles.introText}>
          Habibi is an ever-growing art project within Web3, started by the one
          and only Mark The Habibi. This all began with one word, Habibi. Habibi
          means so many things. It’s a word exchanged between passionate lovers,
          and it’s a word exchanged between caring friends. Simply put, it means
          “dearest” or “darling”. But that’s really selling it short.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default DetailC3;
