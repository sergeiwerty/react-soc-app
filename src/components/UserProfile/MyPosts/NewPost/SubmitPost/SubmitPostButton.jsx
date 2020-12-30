import React from "react";
import { popUpMessage } from "../NewPost";

const SubmitPostButton = () => {

  const addPost = () => {
    let text = popUpMessage.current.value;
    alert(text);
  };

  return (
    <input type="submit" value="Send Post" onClick={ addPost }/>
  );
};

export default SubmitPostButton;