import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Register() {
    const { register, sniper, Message, User } = React.useContext(AuthContext)
    const history = useNavigate();
    React.useEffect(() => {
        if (User) {
            history('/')
        }
    })
    return (
        <div className="container mt-3">
            <div className="row d-flex justify-content-center w-100">
                <div className="text-center mb-1">
                    <img src="/favicon.webp" alt="Freewsa" width="70px" height="auto" />
                    <p className="h5 mb-1">Create your account and start reading now</p></div>
                <div className="col-md-5 shadow-sm card p-3">
                    <h1 className="d-none h4">Create new account</h1>
                    <form className="mt-2" onSubmit={register}>
                        {
                            Message === '' ? '' : <div className='alert alert-danger p-2'>{Message}</div>
                        }
                        <input type="text" name="username" className="form-control mb-3" placeholder="Username" required />
                        <input type="text" name="first_name" className="form-control mb-3" placeholder="First name" required />
                        <input type="text" name="last_name" className="form-control mb-3" placeholder="Last name" required />
                        <input type="email" name="email" className="form-control mb-3" placeholder="Email" required />
                        <input type="password" name="password" className="form-control mb-3" placeholder="Password" required />
                        <input type="password" name="password2" className="form-control mb-3" placeholder="Confirm password" required />
                        <button type="submit" className="w-100 btn btn-primary my-2" >
                            {
                                !sniper ? 'Register' : <div className="spinner-border" style={{ height: '20px', width: "20px" }} role="status"></div>
                            }
                        </button>
                    </form>
                </div>
            </div>
            <div className="row d-flex justify-content-center w-100 mt-3">
                <div className="col-md-5 card shadow-sm p-4 text-center">
                    <p className="m-0">Already have an account ? <a className="text-info" href="/accounts/login">Login</a></p>
                </div>
            </div>
        </div>
    )
}
