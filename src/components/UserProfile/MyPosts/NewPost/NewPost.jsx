import React from "react";
import styles from "./NewPost.module.css";
import SubmitPostButton from "./SubmitPost/SubmitPostButton"


const NewPost = () => {
  return (
    <article>
      <textarea></textarea>
      <SubmitPostButton />
    </article>
  );
};

export default NewPost;
