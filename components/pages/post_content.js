import classes from "./post_content.module.scss";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import Footer from "../UI/layout/Footer";

const PostContent = (props) => {
  const { post, db } = props;
  console.log(db);

  const imagePath = `/images/posts/${db.projectid}/${db.projectid}.png`;
  const pos = props.pos;
  const [isClicked, setIsClicked] = useState(false);
  const linkClickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  const frontTech = db.front;
  const backTech = db.back;
  const frontTechList = frontTech.map((item, index) => (
    <li key={index}>
      <span>{item}</span>
    </li>
  ));
  const backTechList = backTech.map((item, index) => (
    <li key={index}>
      <span>{item}</span>
    </li>
  ));

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
                    src={`/images/posts/${db.projectid}/${imageName}`}
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
          className={classes.front_image_content}
          src={imagePath}
          alt="main"
          width={1919}
          height={983}
          style={{ transform: `translateY(${pos / 2}px)` }}
        />
      </div>
      <section
        className={classes.container}
        style={{ transform: `translateY(${-pos / 50}px)` }}
      >
        <header className={classes.header}>
          <h1>
            {db.title}, <span>{db.excerpt}</span>
          </h1>
          <div className={classes.header_contents_container}>
            <div className={classes.header_contents}>
              <h2>Front</h2>
              <ul>{frontTechList}</ul>
              <h2>Back</h2>
              <ul>{backTechList}</ul>

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
                <p>{db.description}</p>
              </div>
            </div>
          </div>
        </header>
        <article className={classes.article}>
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default PostContent;
