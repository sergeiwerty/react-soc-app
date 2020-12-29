import React from 'react';
import classes from './Aside.module.css';
import {NavLink} from "react-router-dom";

const Aside = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li className={classes.item}><NavLink to="/userprofile" activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
        <li className={classes.item}><NavLink to="/news">News</NavLink></li>
        <li className={classes.item}><NavLink to="/music">Music</NavLink></li>
        <li className={classes.item}><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </aside>
  )
}

export default Aside;