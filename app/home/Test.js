import React from "react";

function Test({ children}) {

  // console.log(children)
  return (
    <>
      <div>Test</div>
      <div>{children.props.test}</div>
      {children}
    </>
  );
}

export default Test;
