import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            incorrectAnswer: false,
            message: ""
        }
    }

    handleClick(buttonText) {

        if (buttonText === this.props.quiz_question.answer) {
            this.props.updateScore()
            this.props.updateAnsweredQuestions()
            this.props.goToNextQuestion()
            this.props.addAnswer()
            this.setState({
                incorrectAnswer: false,
                message: "Right answer!"
            })
        } else {
            this.props.updateAnsweredQuestions()
            this.props.goToNextQuestion()
            this.props.addAnswer()
            this.setState({
                incorrectAnswer: true,
                message: "Wrong answer!"
            })

        }
    }

    goToNext() {
        this.props.goToNextQuestion()
    }

    getScore() {
        this.props.getScore()
    }

    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    <main>
                        <div className="questionArea">
                            <section>
                                <div className="numberAndQuestion">
                                    <p className="questionNumber">
                                        {this.props.questionNumber}
                                    </p>
                                    <p className="question">
                                        {this.props.quiz_question.instruction_text}
                                    </p>
                                </div>
                            </section>
                            <section className="buttons">
                                {/* Rendering ALL question buttons below */}
                                <ul>
                                    {this.props.quiz_question.answer_options.map((answer_option, index) => {
                                        return <QuizQuestionButton
                                            key={index}
                                            button_text={answer_option}
                                            clickHandler={this.handleClick.bind(this)}
                                        />
                                    })}
                                </ul>
                            </section>
                        </div>
                        {/* {
                        this.state.incorrectAnswer === true ?
                            <p className="error">Sorry, wrong answer</p> :
                            <p>Good job, right answer</p>
                    } */}
                        {this.state.message}
                        {this.state.incorrectAnswer === true ?
                            <p>The right answer is: {this.props.quiz_question.answer}</p> : null
                        }

                    </main>

                </div>
                <div className="score">
                    Score: {this.props.correctAnswers} / {this.props.answeredQuestions}
                </div>
            </div>


        )
    }
}

export default QuizQuestion;