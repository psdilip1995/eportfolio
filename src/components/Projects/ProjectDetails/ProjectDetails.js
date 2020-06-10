import React, {Component} from 'react';

import classes from './ProjectDetails.module.css';

class ProjectDetails extends Component{

	
	render(){
		let attachedClasses = [classes.ProjectDetails, classes.Close];
		if(this.props.show === 'block'){
			//console.log("show = true ",this.props.show);
			attachedClasses = [classes.ProjectDetails, classes.Open];
		}
		//console.log(attachedClasses);
		//style={{display:this.props.show}}
		return (
			<div className={attachedClasses.join(' ')} >
				<div style={{width:'100%',height:'15%',backgroundColor:'transparent'}}>
					<span onClick={this.props.close}>
						<i className="fa fa-times" aria-hidden="true" style={{fontSize:'3em',color:'white',margin:'10px'}}></i>
					</span>
					<span className={classes.Title}>
						{this.props.details ? this.props.details.title : null}
					</span>
				</div>
				<div>
					{this.props.details ? this.props.details.body : null}
				</div>
			</div>
		);
	};
};

export default ProjectDetails;