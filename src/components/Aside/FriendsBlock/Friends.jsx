import React from 'react';
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends= (props) => {
  // const FriendsListMap = props.FriendsInfo.FriendsData.Data.map( friend => <DialogItem id={friend.id } name={friend.name} />);
  // debugger;
  const FriendsListMap = props.FriendsInfo.Friends.map( friend => <Friend FriendData={friend.fullName} />);

  return (
    <section>
      <h1>Friends</h1>
      <ul className={styles.friendsList}>
        {FriendsListMap}
      </ul>
    </section>
  )
}

export default Friends;