import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Quiz from './pages/Quiz'
import Home from './pages/Home'
import CreateQuiz from './pages/CreateQuiz'
import ChooseQuiz from './pages/ChooseQuiz'
import QuizEnd from './pages/QuizEnd'
import MyProfile from './pages/MyProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/quizend" component={QuizEnd} />
          <Route path="/createquiz" component={CreateQuiz} />
          <Route path="/choosequiz" component={ChooseQuiz} />
          <Route path="/myprofile" component={MyProfile} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;