import React from 'react';
import LifeCycleHelper from './LifeCycleHelper'

export default class LifeCycle extends React.Component{

	constructor(){
		super();

		this.state={
			data:0,
		}
	}

	_onClickHandler(){
		this.setState({
			data:this.state.data+1
		})
	}

	render(){
		return(
			<div>
				<button onClick={this._onClickHandler.bind(this)}>Increment Me</button>

				<LifeCycleHelper myNumber={this.state.data}/>
			</div>
		);
	}
}