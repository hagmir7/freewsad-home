import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="list-group">
                        <Link className="list-group-item list-group-item-action" to="/"><img src="/assets/img/svg/home.svg" alt="Home" width="30px" />&nbsp; Home</Link>
                        <Link className="list-group-item list-group-item-action" to="/blog"><img src="/assets/img/svg/post.svg" alt="Blogs" width="30px" />&nbsp; Blogs</Link>
                        <Link className="list-group-item list-group-item-action" to="/books"><img src="/assets/img/svg/book.svg" alt="Books" width="30px" />&nbsp; Books</Link>
                        <Link className="list-group-item list-group-item-action" to="/about"><img src="/assets/img/svg/about.svg" alt="About Us" width="30px" />&nbsp; About Us</Link>
                        <Link className="list-group-item list-group-item-action" to="/contact"><img src="/assets/img/svg/contact.svg" alt="Contact Us" width="30px" />&nbsp; Contact Us</Link>
                        <Link className="list-group-item list-group-item-action" to="/policy"><img src="/assets/img/svg/privacy.svg" alt="Privacy Policy" width="30px" />&nbsp; Privacy Policy</Link>
                        <Link className="list-group-item list-group-item-action" to="/language"><img src="/assets/img/svg/location.svg" alt="Language" width="30px" />&nbsp; Language</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
