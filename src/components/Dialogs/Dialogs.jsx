import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";

const Dialogs = (props) => {
    // debugger;
  const DialogsDataMap = props.MessagesData.Messages.DialogsData.map( dialog => <DialogItem id={dialog.id } name={dialog.name} />);
  const MessagesDataMap = props.MessagesData.Messages.MessagesData.map( message => <DialogText text={message.text } />);

  return (
    <section className={styles.dialogs}>
      <div className={styles.users}>
        <ul>
          {/*{DialogsDataMap}*/}

          {DialogsDataMap}
        </ul>
      </div>
      <div className={styles.messageArea}>
        {MessagesDataMap}
      </div>
    </section>
  )
}

export default Dialogs;