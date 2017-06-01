import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	content: {
		textAlign: 'center',
		fontSize: '35px'
	}
}

export default class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text
		}
	}

	render() {
		return (
			<p style={ styles.content }>
				<img src="https://githubbattle.now.sh/imgs/animal.gif"/><br/>
				{ this.state.text }
			</p>
		)
	}
}

Loading.propTypes = {
	text: PropTypes.string.isRequired
}

Loading.defaultProps = {
	text: 'Loading'
}