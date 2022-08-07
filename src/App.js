
import './App.css';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import News from './components/News.js';

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>

          <Route exact path='/' element={<News apiKey ={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general" />} />
          <Route exact path='/business' element={<News apiKey ={this.apiKey} key='business' pageSize={this.pageSize} country="in" category="business" />} />
          <Route exact path='/sports' element={<News apiKey ={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports" />} />
          <Route exact path='/health' element={<News apiKey ={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health" />} />
          <Route exact path='/science' element={<News apiKey ={this.apiKey} key='science' pageSize={this.pageSize} country="in" category="science" />} />
          <Route exact path='/technology' element={<News apiKey ={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category="technology" />} />
          <Route exact path='/entertainment' element={<News apiKey ={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />} />
        
        </Routes>

      </Router>

    )
  }
}

