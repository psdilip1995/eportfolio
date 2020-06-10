import React from 'react';
import Skill from './Skill/Skill';

import classes from './Skills.module.css';

const Skills = props => {
	const skills = ['Java', 'Python', 'GO', 'C/C++', 'HTML', 'CSS', 'Javascript', 'React', 'Vue', 'Angular', 'D3' , 'Knockout', 'SpringBoot'];
	return (
		<div className={classes.Skills}>
			<div className={classes.Label}>Technologies</div>
			{
				skills.map(skill => (
					<Skill key={skill} skill={skill}/>
				))
			}
		</div>
	);
};

export default Skills;