import React from 'react';
import css from './Post.module.css';

function Post(props) {
	return (
		<div className={css.Profile_posts_post}>
        	<img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
        	<span>{props.text}</span>
        </div>
	);
}

export default Post;