import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Dialog.module.css';

function Dialog(props) {
	return(
		<div class={css.item}>
			<NavLink activeClassName={css.active_dialog} to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	);
}

// <div className={css.Dialogs_list}>

// 			</div>
// 			<div className={css.Dialogs_chat}>

// 			</div>

export default Dialog;