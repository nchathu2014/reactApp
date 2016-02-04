import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
	<App/>,
	document.getElementById('container')
);

setTimeout(()=>{
	ReactDOM.unmountComponentAtNode(
		document.getElementById('container')
)
},11100000);


