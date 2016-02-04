import React from 'react';
import Header from './Header';
import Content from './Content';
import Stateful from './Stateful';
import State from './State';
import DefaultProps from './DefaultProps';
import PropValidation from './PropValidation';
import Props from './Props';
import SetState from './SetState';
import ForceUpdate from './ForceUpdate';
import FindDomNode from './FindDomNode';
import LifeCycle from './LifeCycle';
import TwoWayData from './TwoWayData';
import TwoWayDataComplex from './TwoWayDataComplex';
import Refs from './Refs';

export default class App extends React.Component{

	render(){
		return(
			<div>
				<Header/>
				<Content/>
				<Stateful/>
				<State/>
				<DefaultProps/>
				<PropValidation/>
				<Props/>
				<SetState/>
				<ForceUpdate/>
				<FindDomNode/>
				<LifeCycle/>
				<TwoWayData/>
				<TwoWayDataComplex/>
				<Refs/>
				

			</div>
		);
	}
}



