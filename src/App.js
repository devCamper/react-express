import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      bill: []
    }
  }

  render() {
    fetch('/ADT371337')
    .then(res => res.json())
    .then(bill => this.setState({ bill }))

    return (
      <div className="App">
        <header className="App-header">
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          {this.state.bill.map(_ => <tr><td>{_.Name}</td><td>{_.Price}</td></tr>)}
          </table>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
