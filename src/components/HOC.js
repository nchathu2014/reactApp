import React from 'react';


var newData={
	data:"Data From HOC"
}

var MyHOC = ComposedComponent => class extends React.Component{

	componentDidMount(){
		this.setState({
			data:newData.data
		});
	}

	render(){
		return <ComposedComponent {...this.props} {...this.state} />

	}

}

export default class MyComponent extends React.Component{

	render(){
		return(
			<div>
				HOCTester <br/>
				{this.props.data}
			</div>
		);
	}
}

export default MyHOC(MyComponent)