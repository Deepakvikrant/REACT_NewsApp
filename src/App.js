
import './App.css';
import NavBar from './components/NavBar.js'

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={12} country="in" category="sports"/>
      </div>
    )
  }
}

