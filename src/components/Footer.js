import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer-07 bg-white border-top border-bottom mt-2 nav">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="footer-heading mt-3"><Link to="/" className="logo h5">Freewsad.com</Link></div>
                        <p className="menu d-flex justify-content-center mt-3 flex-wrap">
                            <Link to="/" className="nav-link mx-2">Home</Link>
                            <Link to="/privacy" className="nav-link mx-2">Privacy Policy</Link>
                            <Link to="/about" className="nav-link mx-2">About</Link>
                            <Link to="/contact" className="nav-link mx-2">Contact</Link>
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                            Copyright ©
                            {new Date().getFullYear()} - 2021  All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
