import React from "react";
// import styles from './ButtonLike-like.module.css';
import like from './like.png';

const ButtonLike = (props) => {
  return (
    <button value={props.value}>
      <img src={like} height="25" />
      Like</button>
  )
};

export default ButtonLike;
