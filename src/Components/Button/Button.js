import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		return (
			<div 
				className="button"
				onClick={this.props.onClick}
			>
				{this.props.label}
			</div>
		);
	}
}

export default Button;
