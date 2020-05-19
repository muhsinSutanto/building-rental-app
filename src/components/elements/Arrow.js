import React from "react";

const Arrow = (props) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <li
        className="fa fa-chevron-circle-right"
      ></li>
    ) : (
      <li
        className="fa fa-chevron-circle-left"
      ></li>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
};

export default Arrow;
