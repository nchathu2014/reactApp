import React from 'react';
var ReactCSSTrasitionGroup = require('react-addons-css-transition-group');

export default class AnimationsAnother extends React.Component{


	constructor(){
		super();

		this.state={
			items:['Item1...','Item2...']
		}
	}

	_handleAdd(){
		this.setState({
			items:this.state.items.concat([prompt('Create New Item')])
		})
	}

	render(){
		return(
			<div>
				<button onClick={this._handleAdd.bind(this)}>Add Item</button>
				<ReactCSSTrasitionGroup transitionName="example"
										transitionAppear={true}
										transitionAppearTimeout={500}
										transitionEnter={true}
										transitionEnterTimeout={500}
										transitionLeaveTimeout={500}>
					<div>					
						{this.state.items.map((item,index)=>{
							return <div key={index}><h3>{item}</h3></div>
						})}
					</div>
				</ReactCSSTrasitionGroup>
			</div>
		);
	}
}