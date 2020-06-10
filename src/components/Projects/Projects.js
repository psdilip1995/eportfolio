import React, {Component} from 'react';
import classes from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

import burgerLogo from '../../assets/images/burger-logo.png';
import iplLogo from '../../assets/images/ipl.png';
import visLogo from '../../assets/images/vis2.png';
import shark2 from '../../assets/images/shark2.png';
import raft from '../../assets/images/raft.png';
import alexa from '../../assets/images/alexa.png';
import mapreduce from '../../assets/images/mapreduce.png';
import heater from '../../assets/images/heater.gif';

import burgerGIF from '../../assets/images/Burger.gif';

import ProjectDetails from './ProjectDetails/ProjectDetails';

class Projects extends Component {

	state = {
		show: 'none',
		details: null
	};

	getBurgerBuilderDetails = () => {
		return {
			title:'Burger Builder',
			body: (
				<div style={{display:'flex',flexFlow:'row'}}>
					<div><img src={burgerGIF} alt="Burger GIF" className={classes.DemoImg}/></div>
					<div className={classes.ProjDesc}><a className={classes.LiveBtn} href="https://www3.cs.stonybrook.edu/~spolepalli/burgerBuilder" target="blank">Live Demo</a></div>
				</div>
			)
		};
	};
	//
	getIplDetails = () => {
		return {
			title: 'IPL ANALYSIS'
		};
	};

	getVisDetails = () => {
		return {
			title: 'Visual Analysis Projects'
		};
	};

	getShark2Details = () => {
		return {
			title: 'Shark 2 Decoder to predict the swipped word'
		};
	};

	getRaftDetails = () => {
		return {
			title: 'Raft Concensus Protocol'
		};
	};

	getMapReduceDetails = () => {
		return {
			title: 'Map Reduce Implementation'
		};
	};

	getAlexaDetails = () => {
		return {
			title: 'Alexa, How Can I Reason with Prolog'
		};
	};

	getHeaterDetails = () => {
		return {
			title: 'Smart Water Heater'
		};
	};

	getProjectDetails = (proj) => {
		switch(proj){
			case 'burgerBuilder':
				return this.getBurgerBuilderDetails();
			case 'ipl':
				return this.getIplDetails();
			case 'vis':
				return this.getVisDetails();
			case 'shark2':
				return this.getShark2Details();
			case 'raft':
				return this.getRaftDetails();
			case 'mapreduce':
				return this.getMapReduceDetails();
			case 'alexa':
				return this.getAlexaDetails();
			case 'heater':
				return this.getHeaterDetails();
			default: return {
				title : 'some Thing went wrong'
			}
		}
	};

	onOpenHandler = proj => {
		console.log(proj);
		let details = this.getProjectDetails(proj);
		this.setState({show: 'block',details:details});
	};
	onCloseHandler = () => {
		this.setState({show: 'none'});
	};
	render(){
		return (
			<React.Fragment>
			<div className={classes.Projects}>
				<div><h3>Projects (Click on a project to see description/demo)</h3></div>
				<div className={classes.ProjectCards}>
					<ProjectCard clicked={() => this.onOpenHandler('burgerBuilder')}>
						<img src={burgerLogo} alt="burger-builder"/>
						<p>Burger Builder</p>
						<p>React JS</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('ipl')}>
						<img src={iplLogo} alt="IPL Analysis"/>
						<p>IPL Analysis</p>
						<p>Python, Flask, D3</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('vis')}>
						<img src={visLogo} alt="Visual Analytics"/>
						<p>Visual Analytics</p>
						<p>Python, Flask, D3</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('shark2')}>
						<img src={shark2} alt="Shark 2 Decoder"/>
						<p>Keyboard Swiping</p>
						<p>Python, Flask</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('raft')}>
						<img src={raft} alt="Raft Concensus"/>
						<p>Raft Concensus</p>
						<p>GO Lang</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('mapreduce')}>
						<img src={mapreduce} alt="Map Reduce"/>
						<p>MapReduce</p>
						<p>GO Lang</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('alexa')}>
						<img src={alexa} alt="Alexa Reasoning"/>
						<p>Alexa Reasoning</p>
						<p>Prolog</p>
					</ProjectCard>
					<ProjectCard clicked={() => this.onOpenHandler('heater')}>
						<img src={heater} alt="Smart Water Heater"/>
						<p>Smart Heater</p>
						<p>Aurdino, IOT</p>
					</ProjectCard>
				</div>
			</div>
			<ProjectDetails show={this.state.show} close={this.onCloseHandler} details={this.state.details}/>
			</React.Fragment>
		);
	}	
};

export default Projects;