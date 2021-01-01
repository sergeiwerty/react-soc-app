import React from "react";
//import styles from "./NewPost.module.css";
import SubmitPostButton from "./SubmitPost/SubmitPostButton"

let popUpMessage = React.createRef();


export const NewPost = (props) => {
  return (
    <article>
      <textarea id="textArea" ref={popUpMessage}/>
      <SubmitPostButton AddPostFunc={props.AddPostFunc} post={popUpMessage}/>
    </article>
  );
};

//export default NewPost;
