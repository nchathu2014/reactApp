import React from 'react';

export default class TwoWayDataComplexHelper extends React.Component{
	render(){
		return(
			<div>
				<input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
				<h3>{this.props.myDataProp}</h3>
			</div>
		);
	}
}