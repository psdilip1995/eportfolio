import React from 'react';
import Button from '../UI/Button/Button';

import classes from './Footer.module.css';

const Footer = props => {
	return (
		<div className={classes.Footer}>
			<Button> RESUME <i style={{marginLeft:'10%'}}className="fa fa-download" aria-hidden="true"></i></Button>
			<Button> CONTACT ME </Button><br/>
			<p className={classes.Para}>This website is developed using React JS</p>
		</div>
	);
};

export default Footer;