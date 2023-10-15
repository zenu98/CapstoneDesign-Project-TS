import Link from "next/link";
import classes from "./Footer.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div>
        <div>
          <p>CONTACT FE</p>

          <div>
            <Image src="/img/github.png" width={40} height={40} alt="github" />
            <span>github.com/zenu98</span>
          </div>
          <div>
            <Image src="/img/gmail.png" width={40} height={40} alt="gmail" />
            <span>zenu987@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
