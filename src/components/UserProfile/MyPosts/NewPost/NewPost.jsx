import React from "react";
//import styles from "./NewPost.module.css";
import SubmitPostButton from "./SubmitPost/SubmitPostButton"

export let popUpMessage = React.createRef();
export const NewPost = () => {
  return (
    <article>
      <textarea id="textArea" ref={popUpMessage}/>
      <SubmitPostButton />
    </article>
  );
};

//export default NewPost;
