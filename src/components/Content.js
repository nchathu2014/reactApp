import React from 'react';

export default class Content extends React.Component{

	render(){

		var i=6;

		var myStyle={
			fontSize:100,
			color:"#d31145"
		}

		return(
			<div>
				<h3>Another content {8+9}</h3>
				<p data-myattribute="I am a attribute value">paragraph</p>
				<div>
					{(i==6)? 
						<h4 style={myStyle}>True</h4>:
						<h4>False</h4>
					}
				</div>
				<label htmlFor="name">I am label</label>
			</div>
		);
	}
}