import React from 'react';


export default class DefaultProps extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<div>
				My Default Props : {this.props.name} 
				My Age is : {this.props.age}
			</div>
		);
	}

}

DefaultProps.defaultProps={
	name:"Nuwan",
	age:34
}