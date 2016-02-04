import React from 'react';

export default class StateComp1 extends React.Component{

	render(){
		return(
			<div>
				State 1 : {this.props.data}
			</div>
		);
	}
}