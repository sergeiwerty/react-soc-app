import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";
import SubmitMessageButton from "./SubmitMessageButton/SubmitMessageButton";
import { messageText } from "./SubmitMessageButton/SubmitMessageButton";

export let newMessage = React.createRef();
export const Dialogs = (props) => {
    // debugger;
  const DialogsDataMap = props.MessagesData.Messages.DialogsData.map( dialog => <DialogItem id={dialog.id } name={dialog.name} />);
  const MessagesDataMap = props.MessagesData.Messages.MessagesData.map( message => <DialogText text={message.text } />);
  let innerTxt = <DialogText text={ messageText } />;
  return (
    <section className={styles.dialogs}>
      <div className={styles.users}>
        <ul>
          {DialogsDataMap}
        </ul>
      </div>
      <div className={styles.messageArea}>
        {MessagesDataMap}
        {innerTxt}
        <textarea id="textArea" ref={newMessage}/>
        <SubmitMessageButton />
      </div>

    </section>
  )
}

// export default Dialogs;