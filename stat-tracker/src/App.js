import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Basketball Stat Tracker
        </header>
        <body>
          <div className="Chart">
            Date Opponent Points Assists Steals Assists Offense-Rebounds Rebounds Turnovers 2PM 2PA 2P% 3PM 3PA 3P% FTA FTM FT%
          </div>
        </body>
      </div>
    );
  }
}

export default App;
