const { Fragment } = require("react");

function LayoutMain(props) {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default LayoutMain;
