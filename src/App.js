import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Quiz from './Quiz'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Quiz />
      </div>
    )
  }
}

export default App;