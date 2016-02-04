import React from 'react';
import StateComp1 from './StateComp1';
import StateComp2 from './StateComp2';

export default class State extends React.Component{

	constructor(){
		super();

		this.state={
			"data1":"State 1 Data......",
			"data2":"State 2 Data......"
		}
	}

	render(){
		return(
			<div>
				<StateComp1 data={this.state.data1}/>
				<StateComp2 data={this.state.data2}/>
			</div>
		);
	}
}