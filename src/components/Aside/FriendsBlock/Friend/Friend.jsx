import React from 'react';
import styles from "./Friend.module.css";

const Friend = (props) => {
  return (
    <li className={styles.friendItem}><img src="https://www.w3schools.com/howto/img_avatar.png" alt="new" /><p>{props.FriendData}</p></li>
 )
}

export default Friend;