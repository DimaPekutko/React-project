import React from 'react';
import css from './Sidebar.module.css';

function Sidebar() {
  return(
    <nav className={css.Sidebar_nav}>
      <div>
        <a href="#f">Profile</a>
      </div>
      <div>
        <a href="#f">Messages</a>
      </div>
      <div>
        <a href="#f">News</a>
      </div>
      <div>
        <a href="#f">Music</a>
      </div>
      <div>
        <a href="#f">Settings</a>
      </div>
    </nav>
    );
}

export default Sidebar;