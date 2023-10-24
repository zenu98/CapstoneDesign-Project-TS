const { Fragment } = require("react");
import PostNav from "./post_nav";

function Layout(props) {
  return (
    <Fragment>
      <PostNav />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
