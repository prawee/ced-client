/*
 * @Author: Prawee Wongsa prawee.w@integra8t.com 
 * @Date: 2019-03-27 16:22:44 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-03-27 16:28:20
 */
import axios from 'axios';

export const register = newUser => {
    return axios
    .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        console.log('Registered')
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('userToken', response.data.token)
        return response.data
    })
    .catch(errors => {
        console.log('Invalid username and password, ', errors)
    })
}

export const getUser = id => {
    return axios
    .get(`users/getuser/${id}`)
    .then(response => {
        return response
    })
    .catch(errors => {
        return errors
    })
}