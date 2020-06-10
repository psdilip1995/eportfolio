import React from 'react';

import classes from './ProjectCard.module.css';

//href="https://www3.cs.stonybrook.edu/~spolepalli/burgerBuilder"

const ProjectCard = props => {
	return (
		<span className={classes.ProjectCard} onClick={props.clicked}>{props.children}</span>
	);
};

export default ProjectCard;