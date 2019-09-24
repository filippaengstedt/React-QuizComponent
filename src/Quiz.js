import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

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

    showResult() {
        console.log("visa resultat")
    }

    addAnswer() {
        this.setState({
            answers: [1]
        })
    }


    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
        const rightAnswers = quizData.quiz_questions.map(q => {
            return (
                <li>{q.answer}</li>
            )
        })
        const userAnswers = "user answers"
        const questionNumber = quizData.quiz_questions.map(q => {
            return (
                <li>Fråga {q.id}:</li>
            )
        })

        return (
            <div>
                {isQuizEnd ?
                    <QuizEnd
                        resetClickHandler={this.handleResetClick.bind(this)}
                        showResult={this.showResult.bind(this)}
                        rightAnswers={rightAnswers}
                        userAnswers={userAnswers}
                        questionNumber={questionNumber}
                        correctAnswers={this.state.correctAnswers}
                        answeredQuestions={this.state.answeredQuestions}
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