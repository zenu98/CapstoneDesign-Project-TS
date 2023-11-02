import classes from "./Footer.module.scss";

import Image from "next/image";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer_contents_container}>
        <div className={classes.footer_contents}>
          <p>CONTACT ME</p>
        </div>

        <div className={classes.footer_contents}>
          <Image src="/img/gmail.png" width={40} height={40} alt="gmail" />
          <span>zenu987@gmail.com</span>
        </div>
        <div className={classes.footer_contents}>
          <Image src="/img/github.png" width={40} height={40} alt="github" />
          <span>github.com/zenu98</span>
        </div>
        <div className={classes.footer_contents}>
          <p>©2023 Seo All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
