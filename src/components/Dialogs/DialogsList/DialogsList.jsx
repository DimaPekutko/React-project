import React from 'react';
import Dialog from './Dialog/Dialog';
import css from './DialogsList.module.css';

function DialogsList() {

	let data = [
		{
			id: '1',
			name: 'John1'
		},
		{
			id: '2',
			name: 'Peter2'
		},
	];

	let Dialogs = data.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);

	return(
		<div class={css.Dialogs_list}>
			{Dialogs}
      	</div>
	);
}

export default DialogsList;