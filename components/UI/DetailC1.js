import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../Detail.module.css";
import styles from "./DetailC1.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

import Footer from "./layout/Footer";

const DetailC1 = (props) => {
  const pos = props.pos;
  const loadedClient = props.loadedClient;
  const [isClicked, setIsClicked] = useState(false);
  const linkClickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <div className={classes.background}>
        <Image
          className={classes.mainimag}
          src={`${loadedClient.contents[0]}`}
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
          KaYoung,
          <span> Capstone design team-project of SKHU</span>
        </h1>
        <div className={`${classes["introContainer"]}`}>
          <div className={`${classes["introBox-left"]}`}>
            <div>
              <h2>Technologies Used</h2>
              <ul className={classes.usedTech}>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Adobe Premiere Pro</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>FlipaClip</span>
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
        <div className={styles.gifContainer}>
          {loadedClient.gif.map((item) => (
            <div key={item}>
              <Image src={item} alt="gif" width={50} height={50} />
            </div>
          ))}
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

export default DetailC1;
