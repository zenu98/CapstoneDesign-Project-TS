import Image from "next/image";
import classes from "./post_content.module.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
SyntaxHighlighter.registerLanguage("jsx", jsx);
const customRenderers = (db) => {
  return {
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
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
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
      return (
        <SyntaxHighlighter style={atomDark} language="jsx">
          {code.children}
        </SyntaxHighlighter>
      );
    },
  };
};

export default customRenderers;
