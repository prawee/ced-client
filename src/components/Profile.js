/*
 * @Author: Prawee Wongsa prawee.w@integra8t.com 
 * @Date: 2019-03-27 17:13:42 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-03-27 17:42:31
 */
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getUser } from './UserFunctions'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.userToken 
        const decoded = jwt_decode(token)
        getUser(decoded.uid).then(res => {
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile
