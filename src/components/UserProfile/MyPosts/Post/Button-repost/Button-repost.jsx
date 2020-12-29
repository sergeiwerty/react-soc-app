import React from "react";
import repost from "./repost.png";
// import styles from "./ButtonLike-repost.module.css";

const ButtonRepost = (props) => {
  return (
    <button value={props.value}>
      <img src={repost} height="25" />
      Repost</button>
  )
};

export default ButtonRepost;
