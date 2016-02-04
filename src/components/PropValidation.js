import React from 'react';


export default class PropValidation extends React.Component{

	render(){
		return(
			<div>
				<p>String_Types : {this.props.myString}</p>
				<p>Number Types :{this.props.myNumber}</p>
				<p>Boolean Types:{this.props.myBoolean?"T":"F"}</p>
				<p>Object Types : {this.props.myObject.name}-{this.props.myObject.age}-{this.props.myObject.height}</p>
				<p>Array Types : {this.props.myArray.map((item,index)=>{
					return <li key={index}>{item}</li>;
				})}</p>
				<p>Function Type : {this.props.myFunction("Nuwan")}</p>
			</div>
		);
	}

}
var array=[1,2,3,4,5,6];
PropValidation.propTypes = {
	myString:React.PropTypes.string.isRequired,
	myNumber:React.PropTypes.number.isRequired,
	myBoolean:React.PropTypes.bool.isRequired,
	myObject : React.PropTypes.object,
	myArray:React.PropTypes.array,
	myFunction:React.PropTypes.func
}

PropValidation.defaultProps = {
	myString:"Nuwan",
	myNumber:1000,
	myBoolean:false,
	myObject:{
		"name":"Nuwan",
		"age":34,
		"height":"5.5'"
	},
	myArray:array,
	myFunction:function(e){return "Func -> "+e}


}
