import React, { Component } from 'react';
import Button from '../Button/Button';

class ButtonRow extends Component {
	render() {
		const data = this.props.data;
		const buttons = data.map((button, index) => {
			return <Button 
				label={data[index][0]} 
				onClick={data[index][1]} 
				key={index}
			/>
		});

		return (
			<div>
				{buttons}				
			</div>
		);
	}
}

export default ButtonRow;
