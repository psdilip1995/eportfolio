import React from 'react';

import pic from '../../assets/images/profilePic.jpeg';
import classes from './ProfilePic.module.css';

const ProfilePicCircle = props => {
	let imgHW = window.innerHeight*0.15;
	return  <div>
				<img src={pic} className={classes.Pic} style={{width:imgHW, height:imgHW}} alt="Dilip Profile Pic"/>
			</div>;
};

export default ProfilePicCircle;