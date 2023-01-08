import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO/SEO';
import AuthContext from '../context/AuthContext'

export default function Login() {

    const { login, sniper, Message, User } = React.useContext(AuthContext);
    const history = useNavigate();
    const { t } = useTranslation()



    React.useEffect(() => {
        if (User) {
            history('/')
        }
    })
    return (
        <div className="container my-3">
            <SEO
                title={t("Login - Freewsad")}
                description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
                name='freewsad.com'
                type='website'
                image='/favicon.webp'
                url="https://www.freewsad.com/accounts/login"
                canonical="/accounts/login" />
            <div className="row d-flex justify-content-center w-100">
                <div className="text-center mb-1">
                    <img src="/favicon.webp" alt="Freewsa" width="70px" height="auto" />
                    <p className="h5 my-3">{t("Log in to manage your account")}</p>
                </div>
                <div className="col-md-5 shadow-sm card p-3">
                    <h1 className="d-none h4">Login to freewsad</h1>
                    <form onSubmit={login}>
                        {
                            Message === '' ? '' : <div className='alert alert-danger p-2'>{Message}</div>
                        }
                        <div></div>
                        <label htmlFor="username" className="text-muted h6">{t("Username")}</label>
                        <input type="text" name="username" className="form-control rounded-pill mb-3" placeholder={t("Enter your username")} />
                        <label htmlFor="password" className="text-muted h6">{t("Password")}</label>
                        <input type="password" name="password" className="form-control rounded-pill mb-3" placeholder={t("Enter your password")} />
                        <button type="submit" className="w-100 rounded-pill btn btn-primary my-2">
                            {
                                !sniper ? t("Login") : <div className="spinner-border" style={{ height: '20px', width: "20px" }} role="status"></div>
                            }
                        </button>
                    </form>
                </div>
            </div>
            <div className="row d-flex justify-content-center w-100 mt-3">
                <div className="col-md-5 card shadow-sm p-4 text-center">
                    <p className="m-0">{t("Not yet registered")} ? <Link className="text-info" to="/accounts/register/">{t("Create your account")}</Link></p>
                </div>
            </div>
        </div>
    )
}
