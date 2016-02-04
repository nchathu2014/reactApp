import React from 'react';

export default class ForceUpdate extends React.Component{

	_doForceUpdate(){
		this.forceUpdate();
	}

	render(){
		return(
			<div>
				<button onClick={this._doForceUpdate.bind(this)}>Click me for force Update</button>
				<h1>{Math.random()}</h1>
			</div>
		);
	}
}


