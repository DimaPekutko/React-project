import React from 'react';
import css from './Chat.module.css';

function Chat() {
	return(
		<div className={css.Chat}>
			<div className={css.Chat_top}>
				<span>Some man</span>
			</div>
			<div className={css.Chat_content}>
				<div className={css.item}>
					<img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
					<span className={css.Message_name}>James Duff</span>
					<span className={css.Message_text}>Hello my friend! lorem dwakdokwa dwkaopdkwao dkwap okd kwaokd owak odk waokd okwo kdowa dka wokd waok dowk aokd owa</span>
				</div>
				<div className={css.item}>
					<img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
					<span className={css.Message_name}>James Duff</span>
					<span className={css.Message_text}>Hello my friend! lorem dwakdokwa dwkaopdkwao dkwap okd kwaokd owak odk waokd okwo kdowa dka wokd waok dowk aokd owa</span>
				</div>
				<div className={css.item}>
					<img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
					<span className={css.Message_name}>James Duff</span>
					<span className={css.Message_text}>Hello my friend! lorem dwakdokwa dwkaopdkwao dkwap okd kwaokd owak odk waokd okwo kdowa dka wokd waok dowk aokd owa</span>
				</div>
			</div>
			<div className={css.Chat_add_message}>
				<form>
					<input className={css.Chat_add_message_message} type="text" placeholder="Your message..."/>
					<input className={css.Chat_add_message_submit} type="submit"/>
				</form>
			</div>
      	</div>
	);
}

// <div className={css.Dialogs_list}>

// 			</div>
// 			<div className={css.Dialogs_chat}>
				
// 			</div>

export default Chat;