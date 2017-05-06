const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
	render() {
		return (
			<div>
				Hell World! Wasabi Sauce!
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);