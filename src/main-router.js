import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './components/ReactRouter';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path="/" component={ReactRouter}>
			<IndexRoute component={Home}/>
			<Route path="home" component={Home}/>
			<Route path="about" component={About}/>
			<Route path="contact" component={Contact}/>
		</Route>
	</Router>),
	document.getElementById('container')
);



