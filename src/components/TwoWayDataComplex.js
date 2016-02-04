import React from 'react';
import TwoWayDataComplexHelper from './TwoWayDataComplexHelper';

export default class TwoWayDataComplex extends React.Component{

	constructor(){
		super();
		this.state={
			data:"Nuwan"
		}
	}

	_updateState(event){
		this.setState({
			data:event.target.value
		})
	}

	render(){
		return(
			<div>
				<TwoWayDataComplexHelper myDataProp={this.state.data} 
										 updateStateProp={this._updateState.bind(this)}/>
			</div>
		);
	}
}