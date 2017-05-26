import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Battle from './Battle'
import Popular from './Popular'
import Nav from './Nav'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/battle" exact component={ Battle } />
						<Route path="/popular" component={ Popular } />
						<Route render={ function() {
							return <p>Not Found</p>
						}} />
					</Switch>
				</div>				
			</Router>
		);
	}
}