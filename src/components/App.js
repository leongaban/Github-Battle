import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'
import Popular from './Popular'
import Nav from './Nav'

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route exact path="/battle" component={ Battle } />
						<Route path="/battle/results" exact component={ Results } />
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