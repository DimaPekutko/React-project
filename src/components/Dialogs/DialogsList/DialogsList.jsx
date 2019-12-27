import React from 'react';
import Dialog from './Dialog/Dialog';
import css from './DialogsList.module.css';

function DialogsList(props) {

	let Dialogs = props.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);

	return(
		<div class={css.Dialogs_list}>
			{Dialogs}
      	</div>
	);
}

export default DialogsList;