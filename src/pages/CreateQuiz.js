import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuizForm from '../components/QuizForm'

class CreateQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: []
        }

        this.handleNewQuestion = this.handleNewQuestion.bind(this);
    }

    handleNewQuestion = (e, question) => {
        e.preventDefault();
        let questions = [...this.state.questions, question]
        this.setState({
            questions: questions
        })
        console.log(this.state.questions)
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            questions: [e.target.value]
        })
        console.log(this.state.questions)
    }

    handleSave = (e) => {
        e.preventDefault();
    }

    deleteQuestion = () => {
        // e.preventDefault();
        // let questions = this.state.questions.filter(question => {
        //     return question.id !== id
        // })
        // this.setState({
        //     questions: questions
        // })
    }

    handleAddAlternative = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="createQuizContainer">


                <QuizForm />



                <h1>Create a new quiz</h1>

                <div className="CreateQuiz">
                    <form>
                        <div className="inputContainer nameQuiz">
                            <label>Quiz Name</label>
                            <input type="text" onChange={this.handleInputChange}></input>
                        </div>
                        <div className="addQuestionButton">
                            <button onClick={this.handleNewQuestion}>
                                New question
                            </button>
                        </div>

                        {this.state.questions.length > 0 ?
                            this.state.questions.map(q => {
                                return <div className="questionWithAlternatives">
                                    <div className="inputContainer addQuestion">
                                        <label>Question</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="inputContainer alternativesContainer">
                                        <label>Alternative</label>
                                        <input type="text"></input>
                                        <button onClick={this.handleAddAlternative}>+</button>
                                    </div>
                                    <div className="saveQuestion">
                                        <button onClick={this.handleSave}>Save</button>
                                    </div>
                                </div>
                            })
                            : null
                        }

                        <div className="submitContainer">
                            <Link to="/quizsummary">
                                <button type="submit">Create Quiz</button>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}

export default CreateQuiz;