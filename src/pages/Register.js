import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import AuthContext from '../context/AuthContext';

export default function Register() {
    const { register, sniper, Message, User } = React.useContext(AuthContext)
    const history = useNavigate();
    const { t } = useTranslation()


    React.useEffect(() => {
        if (User) {
            history('/')
        }
    })
    return (
        <div className="container mt-3">
            <SEO
                title={t('Register - Freewsad')}
                description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
                name='freewsad.com'
                type='website'
                image='/favicon.webp'
                url="https://www.freewsad.com/accounts/register"
                canonical="/accounts/register" />
            <div className="row m-0 d-flex justify-content-center w-100">
                <div className="text-center mb-1">
                    <img src="/favicon.webp" alt="Freewsa" width="70px" height="auto" />
                    <p className="h5 my-3">{t("Create your account and start managing your profile")}</p></div>
                <div className="col-md-5 shadow-sm card p-3">
                    <h1 className="d-none h4">{t("Create new account")}</h1>
                    <form className="mt-2" onSubmit={register}>
                        {
                            Message === '' ? '' : <div className='alert alert-danger p-2'>{Message}</div>
                        }
                        <input type="text" name="username" className="form-control mb-3" placeholder={t("Username")} required />
                        <input type="text" name="first_name" className="form-control mb-3" placeholder={t("First name")} required />
                        <input type="text" name="last_name" className="form-control mb-3" placeholder={t("Last name")} required />
                        <input type="email" name="email" className="form-control mb-3" placeholder={t("Email")} required />
                        <input type="password" name="password" className="form-control mb-3" placeholder={t("Password")} required />
                        <input type="password" name="password2" className="form-control mb-3" placeholder={t("Confirm password")} required />
                        <button type="submit" className="w-100 btn btn-primary my-2" >
                            {
                                !sniper ? t("Register") : <div className="spinner-border" style={{ height: '20px', width: "20px" }} role="status"></div>
                            }
                        </button>
                    </form>
                </div>
            </div>
            <div className="row m-0 d-flex justify-content-center w-100 mt-3">
                <div className="col-md-5 card shadow-sm p-4 text-center">
                    <p className="m-0">{t("Already have an account")} ? <Link className="text-info" to="/accounts/login">{t("Login")}</Link></p>
                </div>
            </div>
        </div>
    )
}
