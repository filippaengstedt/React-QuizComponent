import React, { Component } from 'react'
import QuizQuestion from '../components/QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('../quiz_data.json')

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quiz_position: 1,
            correctAnswers: 0,
            answeredQuestions: 0,
            answers: []
        }
    }

    showNextQuestion() {
        this.setState((state) => {
            return { quiz_position: state.quiz_position + 1 }
        })
    }

    showPreviousQuestion() {
        this.setState((state) => {
            return { quiz_position: state.quiz_position - 1 }
        })
    }

    handleResetClick() {
        this.setState({
            quiz_position: 1
        })
    }

    updateScore() {
        this.setState({
            correctAnswers: this.state.correctAnswers + 1
        })
    }

    updateAnsweredQuestions() {
        this.setState({
            answeredQuestions: this.state.answeredQuestions + 1
        })
    }

    addAnswer = (buttonText) => {
        let answers = [...this.state.answers, buttonText]
        this.setState({
            answers: answers
        })
        console.log(this.state.answers)
    }

    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
        const userAnswers = this.state.answers.map(a => {
            return a
        })
        const results = quizData.quiz_questions.map(q => {
            return (
                <div className="result">
                    <h3>{q.id}. {q.instruction_text}</h3>
                    <p>Your Answer: {userAnswers[q.id - 1]}</p>
                    <p>Correct Answer: {q.answer}</p>
                </div>
            )
        })

        return (
            <div className="Quiz">
                {isQuizEnd ?
                    <QuizEnd
                        resetClickHandler={this.handleResetClick.bind(this)}
                        userAnswers={userAnswers}
                        correctAnswers={this.state.correctAnswers}
                        answeredQuestions={this.state.answeredQuestions}
                        results={results}
                    /> :
                    <div>
                        <QuizQuestion
                            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
                            showNextQuestionHandler={this.showNextQuestion.bind(this)}
                            questionNumber={this.state.quiz_position}
                            updateScore={this.updateScore.bind(this)}
                            updateAnsweredQuestions={this.updateAnsweredQuestions.bind(this)}
                            goToNextQuestion={this.showNextQuestion.bind(this)}
                            addAnswer={this.addAnswer.bind(this)}
                            correctAnswers={this.state.correctAnswers}
                            answeredQuestions={this.state.answeredQuestions}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Quiz;