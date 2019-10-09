import React, { Component } from 'react'

class QuizEnd extends Component {

    handleResetClick() {
        this.props.resetClickHandler()
    }

    render() {
        return (

            <div className="resultSummaryContainer">
                <h1>Your Result</h1>
                <div className="QuizEnd">
                    <div className="thanksForPlayingContainer">
                        <div className="thanksForPlaying">
                            <h3>Thank You For Playing!</h3>
                            <button>
                                <a href='' onClick={this.handleResetClick.bind(this)}>
                                    Restart Quiz
                                </a>
                            </button>
                        </div>
                        <div className="finalScore">
                            <p>
                                Score:
                            </p>
                            <h2>
                                {this.props.correctAnswers} / {this.props.answeredQuestions}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="resultSummaryContainer">
                    <h1>Correct Answers</h1>
                    <div className="resultSummary">
                        {this.props.results}
                    </div>
                </div>
            </div>

        )
    }
}

export default QuizEnd;