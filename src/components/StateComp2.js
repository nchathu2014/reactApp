import React from 'react';

export default class StateComp2 extends React.Component{

	_handleOnClick(){
		console.log("_handleOnClick fires");

	}
	render(){

		var data = this.props.data;
		return(
			<div>
				State 2 : {data} <br/>
				<button onClick={this._handleOnClick}>Click Me</button>
			</div>
		);
	}
}