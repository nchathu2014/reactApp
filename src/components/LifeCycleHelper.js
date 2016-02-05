import React from 'react';

export default class LifeCycleHelper extends React.Component{

	constructor(){
		console.log("constructor");
		super();
		this.state={
			name:"Nuwan"
		}
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){
		console.log("componentDidMount");
	}

	componentWillReceiveProps(newProps){
		console.log("componentWillReceiveProps");
	}

	componentWillUpdate(nextState,nextProps){
		console.log("componentWillUpdate");
	}

	componentDidUpdate(nextState,nextProps){
		console.log("componentDidUpdate");
	}

	shouldComponentUpdate(nextState,nextProps){
		console.log("shouldComponentUpdate");
		return true;
	}

	componentWillUnmount(){
		console.log("componentWillUnmount");
	}

	render(){
		console.log("render");
		return(
			<div>
				{this.props.myNumber}
			</div>
		);
	}
}