
import './App.css';
import NavBar from './components/NavBar.js'

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  c = 'hormunium'
  render() {
    return (
      <div>

     <NavBar/>

     <News/>


        HELOO FUNCTION BASED COMPONENTS
        jhon play {this.c}

      </div>
    )
  }
}

