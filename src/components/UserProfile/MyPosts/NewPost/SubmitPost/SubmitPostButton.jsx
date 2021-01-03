import React from "react";
// import { popUpMessage } from "../NewPost";
// import textAreaValue from "../ReadInputSymbols/ReadInputSymbols";

const SubmitPostButton = (props) => {

  const addPost = () => {
    console.log(textAreaValue);
    debugger;
    // let text = props.post.current.value;
    let text = textAreaValue;
    props.AddPostFunc(text);
    // props.AddPostFunc("");
  };

  return (
    <input type="submit" value="Send Post" onClick={ addPost }/>
  );
};

export default SubmitPostButton;