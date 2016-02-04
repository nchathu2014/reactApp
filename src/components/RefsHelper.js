import React from 'react';

export default class RefsHelper extends React.Component{
	render(){
		return(
			<div>
				<input type="text" id="textBox" ref="textBox" value={this.props.myData} onChange={this.props.onChangeFunc}/>
				<button onClick={this.props.clearFunc}>Clear Me</button>
				{this.props.myData}
			</div>
		);
	}
}