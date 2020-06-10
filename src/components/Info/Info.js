import React from 'react';
import classes from './Info.module.css';

//import InfoCard from './InfoCard/InfoCard';

const Info = props => {
	return (
		<div className={classes.Info}>
			<div className={classes.Education}>
				<h3>Education</h3>
				<ul>
					<li><strong>Stony Brook University, </strong>MS CS (2019-2020)</li>
					<ul>
						<li>Course curriculum : Distributed Systems, Data Science, Human Computer Interaction, DataBases, Visualization, etc.</li>
					</ul>
					<li><strong>Osmania University, </strong>BEng CSE (2012-2016)</li>
					<ul>
						<li>Course curriculum : Distributed Systems, Operation Systems, Computer Networking, Cloud Computing, Databases, Alogithms, Web Technologies, etc.</li>
					</ul>
				</ul>
			</div>
			<div className={classes.Experience}>
				<h3>Experience</h3>
				<ul>
					<li><strong>ORACLE, </strong>Application Developer (2016-2019)</li>
					<ul>
						<li>Responsibilities</li>
					</ul>
					<li><strong>Progress Software, </strong>Intern (Summer, 2015)</li>
					<ul>
						<li>Responsibilities</li>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default Info;