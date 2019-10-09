import React, { Component } from 'react'

class QuestionCard extends Component {
    render() {
        return (
            <div className="questionWithAlternatives">
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
        )
    }
}

export default QuestionCard;

