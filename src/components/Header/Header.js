import React from 'react';

import classes from './Header.module.css';
import ProfilePic from '../ProfilePic/ProfilePicCircle';

const Header = props => {
	return (
		<div className={classes.Header} >
			<ProfilePic />
			<span className={classes.Name}>SRINIVASA DILIP POLEPALLI</span>
			<div className={classes.LinkDiv}>
				<span className={classes.Link}><i className="fa fa-envelope-o" aria-hidden="true"></i> psdilip1995@gmail.com </span>
				<span className={classes.Link}><i className="fa fa-phone" aria-hidden="true"></i> +1 (631)-948-0350</span>
			</div>
			<div className={classes.IconDiv}>
				<span className={classes.Icon}><a href="https://www.linkedin.com/in/srinivasa-dilip-polepalli/" target="blank"><i className="fa fa-linkedin-square"></i></a></span>
				<span className={classes.Icon}><a href="https://www.facebook.com/dilip.srinivasa.5/" target="blank"><i className="fa fa-facebook-official" ></i></a></span>
				<span className={classes.Icon}><a href="https://github.com/psdilip1995/" target="blank"><i className="fa fa-github-square" ></i></a></span>
			</div>
		</div>
	);
};

export default Header;