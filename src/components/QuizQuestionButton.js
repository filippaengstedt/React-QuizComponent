import React, { Component } from 'react'

class QuizQuestionButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bgColor: ""
        }
    }

    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }

    render() {
        return (
            <div className="QuizQuestionButton">
                <li>
                    <button ref="btn" onClick={this.handleClick.bind(this)}>
                        {this.props.button_text}
                    </button>
                </li>
            </div >
        )
    }
}

export default QuizQuestionButton;