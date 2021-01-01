import React from "react";
import classes from "./Post.module.css";
import ButtonLike from "./Button-like/Button-like";
import ButtonRepost from "./Button-repost/Button-repost";

const Post = (props) => {
  return (
    <div>
      <article>
        <h3 className={`${classes.item} ${classes.styled}`}>{props.heading}</h3>
        <p>{props.content}</p>
        <ButtonLike value="some data"/>
        <ButtonRepost value="some data"/>
      </article>
    </div>
  );
};

export default Post;
