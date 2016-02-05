import React from 'react';
import ReactDOM from 'react-dom';
import RefsHelper from './RefsHelper';

export default class Refs extends React.Component{

	constructor(props){
		super(props);

		this.state={
			data:"Nuwan"
		}
	}

	_onChangeFunc(event){
		this.setState({
			data:event.target.value
		})
	}

	_clearFunc(){
		this.setState({
			data:''
		});

		ReactDOM.findDOMNode(document.getElementById('textBox')).focus();
		ReactDOM.findDOMNode().style.border="2px dashed green";
	}

	render(){
		return(
			<div>
				<RefsHelper myData={this.state.data} 
							clearFunc={this._clearFunc.bind(this)}   
							onChangeFunc={this._onChangeFunc.bind(this)}/>
			</div>
		);
	}
}