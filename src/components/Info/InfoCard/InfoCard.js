import React from 'react';

import classes from './InfoCard.module.css';

const InfoCard = props => {
	return (
		<div className={classes.InfoCard}>
			<p className={classes.Heading}>Education</p>
			<p className={classes.Para}><span className={classes.SubHeading}>Stony Brook University : </span> (MS Computer Science) </p>
			<p className={classes.Para}>Course curriculum: </p>
		</div>
	);
};

export default InfoCard;