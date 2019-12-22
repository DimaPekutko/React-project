import React from 'react';
import css from './DialogsList.module.css';

function DialogsList() {
	return(
		<div class={css.Dialogs_list}>
			<div class={css.item}>
				<a href="#tt">Some Man</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 2</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 3</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 1</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 2</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 3</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 1</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 2</a>
			</div>
			<div class={css.item}>
				<a href="#tt">item 3</a>
			</div>
      	</div>
	);
}

// <div className={css.Dialogs_list}>

// 			</div>
// 			<div className={css.Dialogs_chat}>
				
// 			</div>

export default DialogsList;