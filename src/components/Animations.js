import React from 'react';
var ReactCSSTrasitionGroup = require('react-addons-css-transition-group');

export default class Animations extends React.Component{

	render(){
		return(
			<div>
				<ReactCSSTrasitionGroup transitionName="example"
										transitionAppear={true}
										transitionAppearTimeout={500}
										transitionEnter={false}
										transitionLeave={false}>
					<h1>My Element</h1>
				</ReactCSSTrasitionGroup>	
			</div>
		);
	}
}