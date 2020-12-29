import React from 'react';
// import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = '/dialogs/';
  return (
    <li><NavLink to={path + props.id}>{props.name}</NavLink></li>
  )
}

export default DialogItem;