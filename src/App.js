import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log()
  }
  render() {
    return <div className="App">
      <h1>Hellow World</h1>
      <button onClick={() => this.setState({ counter: this.state.counter + 100 })}>Click me</button>
      <h1>{this.state.counter}</h1>
    </div>
  }
}

export default App;
