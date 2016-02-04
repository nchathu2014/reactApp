import React from 'react';

export default class Prop1 extends React.Component{
	render(){
		return(
			<div>
				{this.props.name}
			</div>
		);
	}
}