import React from "react";
import classes from "./Post.module.css";
import ButtonLike from "./Button-like/Button-like";
import ButtonRepost from "./Button-repost/Button-repost";

const PostsData = [
  {id: 1, content: "Flexible Thinking in a Constantly Changing World"},
  {
    id: 2,
    content: "The default network governs our interior mental life—the dialogue we have with ourselves, both consciously and subconsciously."
  },
  {id: 3, content: "Ezra"},
  {id: 4, content: "Evgenia"},
  {id: 5, content: "Lars"}
];

const Post = (props) => {
  return (
    <div>
      <article>
        <h3 className={`${classes.item} ${classes.styled}`}>{props.heading}</h3>
        <p>{props.content}</p>
        <ButtonLike value="some data"/>
        <ButtonRepost value="some data"/>
      </article>
      {/*<article>*/}
      {/*  <h3 className={`${classes.item} ${classes.styled}`}>{props.heading}</h3>*/}
      {/*  <p>{PostsData[1].content}</p>*/}
      {/*  <ButtonLike value="some data"/>*/}
      {/*  <ButtonRepost value="some data"/>*/}
      {/*</article>*/}
    </div>
  );
};

export default Post;
