import React from 'react';

import classes from './Skill.module.css';

// import Java from '../logos/Java.png';
// import Python from '../logos/Python.png';
// import GO from '../logos/GO.png';
// import C from '../logos/C.png';
// import HTML from '../logos/HTML.png';
// import CSS from '../logos/CSS.png';
// import Javascript from '../logos/Javascript.png';
// import ReactLogo from '../logos/React.png';
// import Vue from '../logos/Vue.png';
// import Angular from '../logos/Angular.png';
// import D3 from '../logos/D3.png';
// import Knockout from '../logos/Knockout.png';
// import SpringBoot from '../logos/SpringBoot.png';


const Skill = props => {
	// let img = null;
	// switch(props.skill){
	// 	case "Java":
	// 		img = <img src={Java} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "Python":
	// 		img = <img src={Python} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "GO":
	// 		img = <img src={GO} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "C/C++":
	// 		img = <img src={C} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "HTML":
	// 		img = <img src={HTML} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "CSS":
	// 		img = <img src={CSS} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "Javascript":
	// 		img = <img src={Javascript} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "React":
	// 		img = <img src={ReactLogo} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "Vue":
	// 		img = <img src={Vue} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "Angular":
	// 		img = <img src={Angular} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "D3":
	// 		img = <img src={D3} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "Knockout":
	// 		img = <img src={Knockout} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	case "SpringBoot":
	// 		img = <img src={SpringBoot} className={classes.Logo} alt={props.skill} />;
	// 		break;
	// 	default: img = null;
	// }
	return (
		<div className={classes.Skill}>
			{/*img*/}
			<span>{props.skill}</span>
		</div>
	);
};

export default Skill;