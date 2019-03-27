/*
 * @Author: Prawee Wongsa prawee.w@integra8t.com 
 * @Date: 2019-03-27 16:53:34 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-03-27 17:10:12
 */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('userToken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button type="button"
                    className="navbar-togger"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar1" className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)