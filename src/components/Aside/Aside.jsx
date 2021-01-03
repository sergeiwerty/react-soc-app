import React from 'react';
import classes from './Aside.module.css';
import {NavLink} from "react-router-dom";
import Friends from './FriendsBlock/Friends';

const Aside = (props) => {
  return (
    <aside className="sidebar">
      <ul>
        <li className={classes.item}><NavLink to="/userprofile" activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
        <li className={classes.item}><NavLink to="/news">News</NavLink></li>
        <li className={classes.item}><NavLink to="/music">Music</NavLink></li>
        <li className={classes.item}><NavLink to="/settings">Settings</NavLink></li>
      </ul>
      {/*debugger;*/}
      <Friends Friends={props.Friends}/>
    </aside>
  )
}

export default Aside;