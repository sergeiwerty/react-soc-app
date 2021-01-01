import React from "react";
// import { popUpMessage } from "../NewPost";

const SubmitPostButton = (props) => {

  const addPost = () => {
    // debugger;
    let text = props.post.current.value;
    props.AddPostFunc(text);
  };

  return (
    <input type="submit" value="Send Post" onClick={ addPost }/>
  );
};

export default SubmitPostButton;