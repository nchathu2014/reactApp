import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';


export default class ReactRouter extends React.Component{
	render(){
		return(
			<div>
				<ul>
					<Link>Home</Link>
					<li>About</li>
					<li>Contact</li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

