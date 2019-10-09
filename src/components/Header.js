import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'

const Header = () => {
    return (
        <nav>
            <div className="Header">
                <a href="/" className="logo">
                    <div className="fullLogo">
                        <img src={Logo}></img>
                        <p>QuizTime</p>
                    </div>
                </a>
                <ul>
                    <Link to="/choosequiz">
                        <li>
                            Play Quiz
                        </li>
                    </Link>
                    <Link to="createquiz">
                        <li>
                            Create Quiz
                        </li>
                    </Link>
                    <Link to="/myprofile">
                        <li>
                            My Profile
                        </li>
                    </Link>
                </ul>

            </div>
        </nav>

    )
}

export default Header;