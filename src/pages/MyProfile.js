import React, { Component } from 'react'

class MyProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myQuizzes: []
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>User Name: </p>
                </div>
                <div>
                    <p>My Quizzes: </p>
                </div>
            </div>
        )
    }
}

export default MyProfile;