import React from 'react';
import css from './Header.module.css';

function Header() {
	return(
		<header className={css.Header}>
        	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"/>
      	</header>
	);
}

export default Header;