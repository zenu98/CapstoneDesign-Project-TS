import classes from "./DetailC1.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Footer from "./layout/Footer";

const DetailC1 = (props) => {
  const { post } = props;
  const { description } = post;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const pos = props.pos;
  const [isClicked, setIsClicked] = useState(false);
  const linkClickHandler = () => {
    setIsClicked((prev) => !prev);
  };
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      const images = node.children.filter((child) => child.tagName === "img");

      if (images.length > 0) {
        return (
          <div>
            {images.map((image, index) => {
              const imageName = image.properties.src;
              const imageAlt = image.properties.alt;
              let isBadge = false;
              let imageWidth = 1919;
              let imageHeight = 983;

              if (imageName.includes("badge")) {
                imageHeight = 100;
                imageWidth = 300;
                isBadge = true;
              }

              return (
                <div key={index} className={classes.image}>
                  <Image
                    src={`/images/posts/${post.slug}/${imageName}`}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    layout={isBadge ? "intrinsic" : "responsive"}
                  />
                </div>
              );
            })}
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    // code(code) {
    //   const { className, children } = code;
    //   const language = className.split("-")[1]; // language-js에서 js부분을 추출하는 부분
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={children}
    //     />
    //   );
    // },
  };

  return (
    <>
      <div className={classes.front_image}>
        <Image
          src={imagePath}
          alt="main"
          width={1919}
          height={983}
          layout="responsive"
          style={{ transform: `translateY(${pos / 2}px)` }}
        />
      </div>
      <section
        className={classes.container}
        style={{ transform: `translateY(${-pos / 50}px)` }}
      >
        <header className={classes.header}>
          <h1>
            KaYoung,
            <span> Capstone design team-project of SKHU</span>
          </h1>
          <div className={classes.header_contents_container}>
            <div className={classes.header_contents}>
              <h2>Front</h2>
              <ul>
                <li>
                  <span>Adobe Premiere Pro</span>
                </li>
                <li>
                  <span>FlipaClip</span>
                </li>
              </ul>
              <h2>Back</h2>
              <ul>
                <li>
                  <span>Adobe Premiere Pro</span>
                </li>
                <li>
                  <span>FlipaClip</span>
                </li>
              </ul>

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
            <div className={classes.header_contents}>
              <div className={classes.header_contents_p}>
                <p>
                  dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
              </div>
            </div>
          </div>
        </header>
        <article className={classes.content}>
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default DetailC1;
