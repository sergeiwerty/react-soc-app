import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
      <header className={classes.header}>
        <img src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" alt="logo" width="60" height="60" />
      </header>
    )
}

export default Header;