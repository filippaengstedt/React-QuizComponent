import React, { Component } from 'react'
import { runInThisContext } from 'vm';

class QuizForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quizName: "",
            questionText: "",
            alternatives: ""
        }
    }

    // handleInputChange = input => e => {
    //     this.setState({
    //         [input]: e.target.value
    //     })
    //     console.log(this.state)
    // }

    handleNameInputChange = (e) => {
        this.setState({
            quizName: e.target.value
        })
        console.log(this.state)
    }

    handleQuestionInputChange = (e) => {
        this.setState({
            questionText: e.target.value
        })
        console.log(this.state)
    }

    render() {
        // const { quizName, questionText, alternatives } = this.state;
        // const values = { quizName, questionText, alternatives }
        return (
            <div className="CreateQuiz">
                <form>
                    <div className="inputContainer nameQuiz">
                        <label>Quiz Name</label>
                        <input
                            type="text"
                            onChange={this.handleNameInputChange}
                            value={this.state.quizName}
                            defaultValue={this.state.quizName}>
                        </input>
                    </div>

                    <div className="addQuestionButton">
                        <button onClick={this.handleNewQuestion}>
                            New question
                        </button>
                    </div>

                    <div className="questionWithAlternatives">
                        <div className="inputContainer addQuestion">
                            <label>Question</label>
                            <input
                                type="text"
                                onChange={this.handleQuestionInputChange}
                                value={this.state.questionText}>
                            </input>
                        </div>
                        <div className="inputContainer alternativesContainer">
                            <label>Alternative</label>
                            <input
                                type="text"
                                value={this.state.alternatives}>
                            </input>
                            <button onClick={this.handleAddAlternative}>+</button>
                        </div>
                        <div className="saveQuestion">
                            <button onClick={this.handleSave}>Save</button>
                        </div>
                    </div>

                    <div className="submitContainer">
                        {/* <Link to="/quizsummary"> */}
                        <button type="submit">Create Quiz</button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default QuizForm;
