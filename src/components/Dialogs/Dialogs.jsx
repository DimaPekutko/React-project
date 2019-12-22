import React from 'react';
import DialogsList from './DialogsList/DialogsList';
import Chat from './Chat/Chat';
import css from './Dialogs.module.css';

function Dialogs() {
	return(
		<div>
			<div className={css.Dialogs_top}>
				<h2>Dialogs:</h2>
			</div>    	
			<DialogsList/>
			<Chat/>
      	</div>
	);
}

// <div className={css.Dialogs_list}>

// 			</div>
// 			<div className={css.Dialogs_chat}>
				
// 			</div>

export default Dialogs;