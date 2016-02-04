import React from 'react';


/*To change the states in ES6 have to bind the state explicitly,
there are two ways to do it.

1)this._handleOnClick = this._handleOnClick.bind(this); inside the constructor function
2)onClick={this._handleOnClick.bind(this)}*/

export default class SetState extends React.Component{

	constructor(){
		super();
		this.state={
			name:"Unknown"
		}
		//this._handleOnClick = this._handleOnClick.bind(this); way -1
	}
	_handleOnClick(){
		this.setState({
			name:"Nuwan"
		});
	}
	render(){
		return(
			<div>
				Set State : {this.state.name} <br/>
				<button onClick={this._handleOnClick.bind(this)}>Click me to change the state</button> 			</div>
		);
	}
}