import PostNav from "./post_nav";
import { ReactNode, Fragment } from "react";

interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <PostNav />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
