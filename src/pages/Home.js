import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/quiz"><button>Start Quiz</button></Link>

            </div >
        )
    }
}

export default Home;