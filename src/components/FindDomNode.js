import React from 'react';
import ReactDOM from 'react-dom';

export default class FindDomNode extends React.Component{

	_findDOMNode(){
		var node = document.getElementById('myDiv');
		node = ReactDOM.findDOMNode(node);
		node.style.backgroundColor='green';

		var another_node = ReactDOM.findDOMNode(this);
		another_node.style.backgroundColor='orange';
		console.log(node);
		console.log(another_node);
	}
	render(){
		return(
			<div id="mainWrapper">
				<div id="myDiv">
					This is myDiv Div
				</div>
				<div>
					I am another Div
				</div>

				<button onClick={this._findDOMNode.bind(this)}>Click me to Find DOM</button>
			</div>
		);
	}
}