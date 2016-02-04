import React from 'react';

export default class Stateful extends React.Component{

	
	constructor(){
		super();

		this.state={
			data:[
				{
					"id":100,
					"name":"Nuwan",
					"age":"30"
				},
				{
					"id":101,
					"name":"Chathuranga",
					"age":"34"
				},
				{
					"id":102,
					"name":"Thuduwage",
					"age":"36"
				},
				{
					"id":103,
					"name":"Don",
					"age":"39"
				}
			]
		}
	}
	
	render(){
		return(
			<div>
				<h1>Stateful {this.props.name}</h1>
				{this.state.data.map((person,index)=>{
					return <li key={index}>{person.name}({person.age})</li>
				})}
			</div>
		);
	}

	
}