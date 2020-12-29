import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  // debugger;
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        {/*<img src="https://www.linuxfoundation.org/wp-content/uploads/2016/12/lf_background_trees.jpg" alt="forest" width="990" height="auto" />*/}
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwwF8YK4JX1sMHKQWi_jB6u3DmaXtixwmIw&usqp=CAU" alt="avatar" />
      </div>
      <MyPosts Posts={props.PostsData.Data} />
    </main>
  )
}

export default UserProfile;