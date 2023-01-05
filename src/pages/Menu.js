import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import AuthContext from '../context/AuthContext';

export default function Menu() {

    const { User, logout } = React.useContext(AuthContext);
    const { t } = useTranslation()
    return (
        <div className="container mt-3">
            <SEO
                title='Menu - Freewsad'
                description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
                name='freewsad.com'
                type='website'
                image='/favicon.webp'
                url="https://www.freewsad.com/menu"
                canonical="/menu" />
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="list-group">
                        <Link className="list-group-item list-group-item-action" to="/"><img src="/assets/img/svg/home.svg" alt="Home" width="30px" />&nbsp; {t("Home")}</Link>
                        {
                            !User ?
                                <Link className="list-group-item list-group-item-action" to="/accounts/login"><img src="/assets/img/svg/login.svg" alt="login" width="30px" />&nbsp; {t("Login / Regsiter")}</Link>
                                :
                                <Link className="list-group-item list-group-item-action" to={`/${User.username}`}><img src="/assets/img/svg/user.svg" alt="profile" width="30px" />&nbsp; Profile</Link>
                        }

                        <Link className="list-group-item list-group-item-action" to="/blog"><img src="/assets/img/svg/post.svg" alt="Blogs" width="30px" />&nbsp; {t("Blogs")}</Link>
                        <Link className="list-group-item list-group-item-action" to="/books"><img src="/assets/img/svg/book.svg" alt="Books" width="30px" />&nbsp; {t("Books")}</Link>
                        <Link className="list-group-item list-group-item-action" to="/about"><img src="/assets/img/svg/info.svg" alt="About Us" width="30px" />&nbsp; {t("About Us")}</Link>
                        <Link className="list-group-item list-group-item-action" to="/contact"><img src="/assets/img/svg/contact.svg" alt="Contact Us" width="30px" />&nbsp; {t("Contact Us")}</Link>
                        <Link className="list-group-item list-group-item-action" to="/privacy"><img src="/assets/img/svg/privacy.svg" alt="Privacy Policy" width="30px" />&nbsp; {t("Privacy Policy")}</Link>
                        {/* <Link className="list-group-item list-group-item-action" to="/language"><img src="/assets/img/svg/location.svg" alt="Language" width="30px" />&nbsp; Language</Link> */}
                        {
                            !User ?
                                <>
                                    {/* <Link className="list-group-item list-group-item-action" to="/accounts/login"><img src="/assets/img/svg/login.svg" alt="login" width="30px" />&nbsp; Login / Regsiter</Link> */}
                                    {/* <Link className="list-group-item list-group-item-action" to="/accounts/register"><img src="/assets/img/svg/register.svg" alt="register" width="30px" />&nbsp; Register</Link> */}
                                </>


                                :
                                <span onClick={logout} className="list-group-item list-group-item-action pointer" ><img src="/assets/img/svg/logout.svg" alt="register" width="30px" />&nbsp; {t("Logout")}</span>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
