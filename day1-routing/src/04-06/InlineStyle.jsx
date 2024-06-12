import React from "react";
import "./../styles/InlineStyling.css";


const InlineStyling = () => {
  const styles = { color: "yellow", fontSize: "50px" };
  return (
    <>
      <div style={{ color: "coral", fontSize: "90px" }}>InlineStyling</div>
      <div style={styles}>InlineStyling</div>
      <p className="col-rgb">Testing class</p>
      <p id="my-id">Testing Id</p>
    </>
  );
};

export default InlineStyling;