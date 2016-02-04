import React from 'react';

export default class TwoWayData extends React.Component{

	constructor(){
		super();

		this.state={
			data:"Hi..."
		}
	}

	_onChangeHandler(event){
		this.setState({
			data:event.target.value
		})
	}

	render(){
		return(
			<div>
				<input type="text" value={this.state.data} onChange={this._onChangeHandler.bind(this)}/>
				{this.state.data}
			</div>
		);
	}
}