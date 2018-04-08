import React, { Component } from 'react';
import './App.css';
import math from 'mathjs';
import Screen from './Components/Screen/Screen';
import ButtonRow from './Components/ButtonRow/ButtonRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      updated: false,
      error: false,
    };
  }

  // Add character to screen. If it is first key being pressed,
  // set the first character to that instead of default 0.
  addChar(char) {
    if (this.state.updated) {
      const input = this.state.input + char.toString();
      this.setState({
        input: input,
      });
    } else {
      this.setState({
        input: char,
        updated: true,
      });
    }
  }

  // Reset screen to default state
  clearInput() {
    this.setState({
      input: 0,
      error: false,
      updated: false,        
    });
  }

  // Put an error on screen
  setError() {
    this.setState({
      input: 'Error',
      error: true,
    });
  }

  // Chear error from the screen
  clearError() {
    this.setState({
      input: 0,
      error: false,
      updated: false,        
    });
  }

  // Delete last character entered. If it last one,
  // set the screen to show the default 0.
  delete() {
    const input = this.state.input.toString();
    if (input.length === 1) {
      this.clearInput();
    } else {
      this.setState({
        input: input.slice(0, -1),
      });
    }
  }

  // Evaluate entered expression, put error
  // on the screen if it is invalid
  evaluate() {
    try {
      this.setState({
        input: math.eval(this.state.input),
      });
    }
    catch(err) {
      this.setError();
    }
  }

  // Update the screen based on the key pressed
  updateInput(char) {
    if (char === 'AC') {
      this.clearInput();
    } else if (char === '=') {
      this.evaluate();
    } else if (char === '<') {
      this.delete();
    } else {
      this.addChar(char);
    }
  }

  // Either clear error or update the screen with new input
  // Made so that any button press can clear the error
  handlePress(char) {
    this.state.error ? this.clearError() : this.updateInput(char);
  }

  render() {
    // When there are more than 9 characters, screen should be
    // centered to avoid overflows
    const centerDisplay = this.state.input.toString().length > 9; 

    // Set up the labels and callbacks for each button
    const firstRow = [
      ['(', () => this.handlePress('(')],
      [')', () => this.handlePress(')')],
      ['AC', () => this.handlePress('AC')],
      ['<', () => this.handlePress('<')],
    ];

    const secondRow = [
      ['√', () => this.handlePress('sqrt(')],
      ['^', () => this.handlePress('^')],
      ['x', () => this.handlePress('*')],
      ['÷', () => this.handlePress('/')],
    ];

    const thirdRow = [
      ['7', () => this.handlePress('7')],
      ['8', () => this.handlePress('8')],
      ['9', () => this.handlePress('9')],
      ['+', () => this.handlePress('+')],
    ];

    const forthRow = [
      ['4', () => this.handlePress('4')],
      ['5', () => this.handlePress('5')],
      ['6', () => this.handlePress('6')],
      ['-', () => this.handlePress('-')],
    ];

    const fifthRow = [
      ['1', () => this.handlePress('1')],
      ['2', () => this.handlePress('2')],
      ['3', () => this.handlePress('3')],
      ['=', () => this.handlePress('=')],
    ];

    const sixthRow = [
      ['0', () => this.handlePress('0')],
      ['.', () => this.handlePress('.')],
    ];

    return (
      <div className='body'>
        <div className='header'>
          <Screen value={this.state.input} centerDisplay={centerDisplay}/>
        </div>
        <div className='wrapper'>
          <ButtonRow data={firstRow}/>
          <ButtonRow data={secondRow}/>
          <ButtonRow data={thirdRow}/>
          <ButtonRow data={forthRow}/>
          <ButtonRow data={fifthRow}/>
          <ButtonRow data={sixthRow} />
        </div>
      </div>
    );
  }
}

export default App;
