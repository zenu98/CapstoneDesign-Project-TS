import Link from "next/link";
import classes from "./post-item.module.scss";
import Image from "next/image";
import { PageProps } from "../../../lib/model";
const PostItem: React.FC<PageProps> = (props) => {
  const { title, excerpt, date, projectid } = props.db;
  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${projectid}/${projectid}.png`;
  const linkPath = `/portfolio/${projectid}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 500px) 50vw,(max-width: 1188px) 100vw, 50vw"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
export default PostItem;
