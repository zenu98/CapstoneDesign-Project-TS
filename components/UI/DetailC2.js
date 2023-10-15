import classes from "../Detail.module.css";
import styles from "./DetailC2.module.css";
import Image from "next/image";
import Footer from "./layout/Footer";
import { useState } from "react";

const DetailC2 = (props) => {
  const loadedClient = props.loadedClient;
  const pos = props.pos;
  const [isClicked, setIsClicked] = useState(false);
  const linkClickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <div className={classes.background}>
        <Image
          className={classes.mainimag}
          src={`${loadedClient.contents[1]}`}
          alt="dummy"
          fill
          style={{ transform: `translateY(${pos / 1.5}px)` }}
        />
      </div>
      <div
        className={classes.container}
        style={{ transform: `translateY(${-pos / 100}px)` }}
      >
        <h1 className={classes.title}>
          Mireu,
          <span> Capstone design team-project of SKHU</span>
        </h1>
        <div className={`${classes["introContainer"]}`}>
          <div className={`${classes["introBox-left"]}`}>
            <div>
              <h2>What I Did</h2>
              <ul className={classes.usedTech}>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>3D Design</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Art Direction</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Album Cover</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>Remake</span>
                </li>
              </ul>
            </div>
            <div>
              <h2>Technologies Used</h2>
              <ul className={classes.usedTech}>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span>CINEMA 4D</span>
                </li>
                <li className={`${classes["usedTech-contents"]}`}>
                  <span> Octane Render</span>
                </li>
              </ul>
            </div>
            {isClicked ? (
              <div onClick={linkClickHandler} className={classes.linkContainer}>
                <h2>- Link</h2>
                <Image
                  src={`/img/Instagram_icon.png`}
                  alt="insta"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <div className={classes.linkContainer} onClick={linkClickHandler}>
                <h2>+ Link</h2>
              </div>
            )}
          </div>
          <div className={`${classes["introBox-right"]}`}>
            <p className={classes.introText}>
              ‘풋사과’는 무르익기 전 사과의 상태를 나타냅니다. 동시에 ‘풋풋함’이
              <br />
              가져오는 무모한 용기와 순수한 꿈을 대변합니다. 건축가 안도
              타다오는 초록 사과를 ‘청춘’이라 표현하기도 했습니다. 나는
              ‘풋사과’를 ‘첫사랑’과 연결 지어 생각했습니다. <br />
              <br />
              우리가 ‘첫사랑’이란 단어를 생각하며 설레게 <br /> 하는 까닭은,
              그건 마치 잊고 있었던 ‘어린아이의 마음’을 상기시키기 <br />
              때문입니다. 나는 2008년 발매된 샤이니의 “누난 너무 예뻐” 에서
              그러한 동심을 느꼈고, 이를 2023년 새롭게 3D 그래픽으로
              표현했습니다.
            </p>
          </div>
        </div>
        <div className={styles.first_image_section}>
          <div className={styles.first_image_container}>
            <Image
              width={2500}
              height={1000}
              className={classes.imgs}
              src={`${loadedClient.contents[1]}`}
              alt="dummy"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>

        <div className={classes.imagethree}>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[2]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[3]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[4]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className={`${classes["DetailContainer"]}`}>
          <div className={`${classes["detailBox-right"]}`}>
            <p className={classes.detailText}>
              <br />첫 번째 아트워크는 샤이니의 “누난 너무 예뻐” 앨범
              커버입니다. <br />
              가운데 포도가 보이시나요? 그건 바로 당신입니다. 당신은 쨍한
              여름날, 달콤한 향기를 품기며
              <br /> 요염하게 누워있습니다. 당신 주위로 어쩔 수 없이 모이는
              개미와 나비는 당신이란 존재를 <br />
              찬양합니다. 그럼 당신은 그저 그 순간을 즐기기만 하면 된답니다.
              8월에만 느낄 수 있는
              <br /> 싱그러운 포도향기를 상상하며 작품을 감상하시길 추천합니다.
              <br />
              <br />
              계절감을 ‘여름’으로 잡았습니다. <br />
              너무 환하고 더워서 아무 생각도 할 수 없었던 찰나를 기억하나요?
              <br />
              나는 그런 찰나를 배경으로 삼았습니다. 모든건 완벽하지 않습니다.
              <br /> 사실은 그 정반대라고 할수 있습니다. 조금은 엉뚱하고 재밌게
              우리의 마음을 이해해 보려는 <br />
              시도는, 뜻밖에 새로운 발견을 가져다 줄지도 모릅니다. 이제 당신을
              내가 만든 ‘풋사과’의 세계로 지금부터 초대합니다! <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailC2;
