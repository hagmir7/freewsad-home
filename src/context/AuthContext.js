import jwtDecode from 'jwt-decode';
import React from 'react';
import { resolvePath, useNavigate } from 'react-router-dom';
import API from '../api/API';

import jwt_decode from "jwt-decode";



const AuthContext = React.createContext({});


export const AuthProvider = ({ children }) => {






    const history = useNavigate();

    const [sniper, setSniper] = React.useState(false);
    const [Message, setMessage] = React.useState('');


    const [User, setUser] = React.useState(false)


    // const LocalToken = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    const DecodeToken = localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null;


    const getUser = async () => {
        await API.get(`user/id/${DecodeToken.id}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(respons => {
            setUser({...respons.data[0], ...respons.data[1]})
        }).catch(error => {
            console.log(error)
        })
    }









    const LoinUser = (event) => {
        event.preventDefault();
        const data = {
            'username': event.target.username.value,
            'password': event.target.password.value
        };
        login(data.username, data.password);
    }


    const login = async (username, password) => {
        const data = JSON.stringify({
            'username': username,
            'password': password
        });
        setMessage('')
        setSniper(true);

        await API.post('token/', data, {
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(respons => {
            localStorage.setItem('authTokens', JSON.stringify(respons.data))
            history('/')
            setSniper(false)

        }).catch(error => {
            setMessage('The username or password is incorrect.')
            setSniper(false)
            console.log(error)
        })
    }


    const register = async (event) => {
        setMessage('')
        event.preventDefault();
        setSniper(true);
        const data = new FormData(event.target)
        await API.post('register', data, {
        }).then(respons => {
            console.log(data.get('username'))
            console.log(data.get('password'))
            login(data.get('username'), data.get('password'))
            console.log(respons)
            setSniper(false);
        }).catch(error => {
            setSniper(false);
            const usernameError = error.response.data.username;
            const emailError = error.response.data.email
            if (usernameError) {
                setMessage(usernameError);
            } else {
                setMessage(emailError);
            }
        })
    }


    let contextData = {
        login: LoinUser,
        sniper: sniper,
        Message: Message,
        register: register,
        User: User

    }



    React.useEffect(() => {
        getUser()
    }, [])

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;


