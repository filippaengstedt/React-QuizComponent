import React, { Component } from 'react'

class QuizEnd extends Component {

    handleResetClick() {
        this.props.resetClickHandler()
    }

    render() {
        return (
            <div>
                <div className="QuizEnd">
                    <p>Thanks for playing!</p>
                    <button>
                        <a href='' onClick={this.handleResetClick.bind(this)}>
                            Restart Quiz
                        </a>
                    </button>
                </div>
                <div className="score">
                    Score: {this.props.correctAnswers} / {this.props.answeredQuestions}
                </div>
                <div className="resultSummary">
                    <div className="resultColumn">
                        <h3>Questions: </h3>
                        {this.props.questionNumber}
                    </div>
                    <div className="resultColumn">
                        <h3>User answers: </h3>
                        <ul>{this.props.userAnswers}</ul>
                    </div>
                    <div className="resultColumn">
                        <h3>Right answers: </h3>
                        <ul>{this.props.rightAnswers}</ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default QuizEnd;