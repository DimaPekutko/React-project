import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Sidebar.module.css';

function Sidebar() {
  return(
    <nav className={css.Sidebar_nav}>
      <div>
        <NavLink activeClassName={css.active_link} to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active_link} to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active_link} to="/news">News</NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active_link} to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active_link} to="/settings">Settings</NavLink>
      </div>
    </nav>
    );
}

export default Sidebar;