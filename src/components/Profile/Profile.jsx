import React from 'react';
import Post from './Post/Post';
import css from './Profile.module.css';


function Profile() {
	return (
		<div>
        <div className={css.Profile_top}>
          <a href="#rrr"><h2>@jamesduff</h2></a>
          <img src="https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg"/>
        </div>
        <div className={css.Profile_desc}>
          <div className={css.left_content}>
            <img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
          </div>
          <div className={css.right_content}>
            <h2>James Duff</h2>
            <p>Date of Birth: 21 February</p>
            <p>City: Springfield</p>
            <p>Education: School 97</p>
            <p>Web Site: <a href="https://reactjs.org/">https://reactjs.org/</a></p>
          </div>
        </div>
        <div className={css.Profile_posts}>
          <div>
            <h2>My posts</h2>
          </div>
          <div className={css.Profile_add_post}>
            <form action="#">
              <input className={css.Profile_add_post_message} type="text" name="post-text" placeholder="Your message..."/>
              <input className={css.Profile_add_post_submit} type="submit" name="submit-post" value="Send" />
            </form>
          </div>
        </div>
        <div className={css.Profile_posts_list}>
          <Post message="Hello all!"/>
          <Post message="Ya, good."/>
          <Post message="Good job."/>
        </div>
      </div>
	);
}

export default Profile;