import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
	render() {
		// Add proper class to screen depending on the amount
		// of characters currently displayed.
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
