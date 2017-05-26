import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
	render() {
		return (
			<div className="home-container">
				<div className="github-logo">
					<img src="https://camo.githubusercontent.com/b5d1fce147445b2e54412caa5a2d86fc98a85fbb/68747470733a2f2f6f63746f6465782e6769746875622e636f6d2f696d616765732f646f6a6f6361742e6a7067" alt=""/>
				</div>
				<h1>Github Battle</h1>
				<Link className="button" to="/battle">
					Battle
				</Link>
			</div>
		)
	}
}