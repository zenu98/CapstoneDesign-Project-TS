import classes from "./post_content.module.scss";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Footer from "../../UI/layout/Footer";
import { PageProps } from "../../../lib/model";
import ScrollToTop from "../../UI/button/scrollToTop";
import Link from "next/link";
import customRenderers from "./custom_render";
import { Noto_Sans_KR, Nanum_Gothic } from "next/font/google";

const noto = Noto_Sans_KR({
  preload: false,
  weight: ["100", "400", "700"],
  display: "swap",
});
export const nanum = Nanum_Gothic({
  preload: false,
  weight: ["400", "700", "800"],
  display: "swap",
});

interface PagePropsAddPos extends PageProps {
  pos: number;
}

const PostContents: React.FC<PagePropsAddPos> = (props) => {
  const { post, db, pos } = props;
  const customRenderersDB = customRenderers(db);
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

  return (
    <>
      <div className={classes.front_image}>
        <Image
          className={classes.front_image_content}
          src={imagePath}
          alt="mainImage"
          width={1919}
          height={983}
          style={{ transform: `translateY(${pos / 2}px)` }}
          priority={true}
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
          <div className={`${classes.header_contents_container}`}>
            <div className={classes.header_contents}>
              <div className={nanum.className}>
                <h2>Front</h2>
                <ul>{frontTechList}</ul>
                <h2>Back</h2>
                <ul>{backTechList}</ul>
              </div>
              {isClicked ? (
                <div>
                  <h2 onClick={linkClickHandler}>- Link</h2>
                  <Link href={db.link}>
                    <Image
                      src="/images/logo/github.png"
                      alt="github"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              ) : (
                <div onClick={linkClickHandler}>
                  <h2 className={nanum.className}>+ Link</h2>
                </div>
              )}
            </div>
            <div className={classes.header_contents}>
              <div className={classes.header_contents_p}>
                <p className={noto.className}>{db.description}</p>
              </div>
            </div>
          </div>
        </header>
        <article className={classes.article}>
          <ReactMarkdown
            components={customRenderersDB}
            className={noto.className}
          >
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
