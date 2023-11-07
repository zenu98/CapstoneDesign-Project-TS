import classes from "./post_content.module.scss";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Footer from "../../UI/layout/Footer";
import { PageProps } from "../../../lib/model";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import ScrollToTop from "../../UI/button/scrollToTop";
import Link from "next/link";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

interface PagePropsAddPos extends PageProps {
  pos: number;
}

const PostContents: React.FC<PagePropsAddPos> = (props) => {
  const { post, db, pos } = props;

  const imagePath = `/images/posts/${db.projectid}/${db.projectid}.png`;

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
      const images = paragraph.node.children.filter(
        (child) => child.tagName === "img"
      );

      if (images.length > 0) {
        return (
          <div className={classes.imgContainer}>
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
                <div
                  key={index}
                  className={`${isBadge ? classes.badgeImage : classes.image}`}
                >
                  <Image
                    src={`/images/posts/${db.projectid}/${imageName}`}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    layout={"responsive"}
                  />
                </div>
              );
            })}
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className } = code;
      const language = className.split("-")[1]; // language-js에서 js부분을 추출하는 부분
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {code.children}
        </SyntaxHighlighter>
      );
    },
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
                <div>
                  <h2 onClick={linkClickHandler}>- Link</h2>
                  <Link href={db.link}>
                    <Image
                      src="/img/github.png"
                      alt="insta"
                      width={50}
                      height={50}
                    />
                  </Link>
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
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default PostContents;
