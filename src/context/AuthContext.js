import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/API';

import jwt_decode from "jwt-decode";
import { useTranslation } from 'react-i18next';



const AuthContext = React.createContext({});


export const AuthProvider = ({ children }) => {






    const history = useNavigate();
    const { t } = useTranslation();
    const [sniper, setSniper] = React.useState(false);
    const [Message, setMessage] = React.useState('');




    // const LocalToken = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    const DecodeToken = localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null;

    let [authTokens, setAuthTokens] = React.useState(() => DecodeToken);

    const [User, setUser] = React.useState(authTokens)

    const getUser = async () => {
       if(DecodeToken !== null){
        await API.get(`user/${DecodeToken.username}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(respons => {
            setUser({ ...respons.data[0], ...respons.data[1] })
        }).catch(error => {
            console.log(error)
        })
       }else{
        setUser(null)
       }
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
            setMessage(t('The username or password is incorrect.'))
            setTimeout(()=>{setMessage('')}, 3000)
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


    const logout = () => {
        setAuthTokens(null)
        localStorage.removeItem('authTokens')
        
    history('/accounts/login');

    }


    let contextData = {
        login: LoinUser,
        sniper: sniper,
        Message: Message,
        register: register,
        User: User,
        logout: logout,
        authTokens, authTokens

    }



    React.useEffect(() => {
        getUser()
    }, [history])

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;


