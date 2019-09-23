import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answerIsIncorrect: false
        }
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
            this.setState({
                answerIsIncorrect: false
            })
        } else {
            this.setState({
                answerIsIncorrect: true
            })
        }
    }

    render() {
        return (
            <div>
                <main>
                    <section>
                        <p>
                            {this.props.quiz_question.instruction_text}
                        </p>
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
                    {
                        this.state.answerIsIncorrect === true ?
                            <p>Sorry, that's not right</p> :
                            null
                    }
                </main>
            </div>
        )
    }
}

export default QuizQuestion;