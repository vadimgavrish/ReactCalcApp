import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
	render() {
		const className = this.props.centerDisplay ? 
			"display centerText"
			:
			"display rightText";

		return (
			<div className={className}>
				{this.props.value}
			</div>
		);
	}
}

export default Screen;
