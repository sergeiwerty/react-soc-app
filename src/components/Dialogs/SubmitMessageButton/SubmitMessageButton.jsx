import React from 'react';
import { newMessage } from "../Dialogs";

export let messageText;
const SubmitMessageButton = () => {
  const addPost = () => {
    // alert(newMessage.current.value);
    messageText = newMessage.current.value;
  };
  return (
    <input type="submit" value="Send Post" onClick={addPost}/>
  );
};

export default SubmitMessageButton;