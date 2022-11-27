import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="list-group">
                        <Link class="list-group-item list-group-item-action" to="/"><img src="https://freewsad.com/static/media/home.090caffd6acdda967970027e1d5928c5.svg" alt="Home" width="30px" />&nbsp; Home</Link>
                        <Link class="list-group-item list-group-item-action" to="/blog"><img src="https://freewsad.com/static/media/post.0aa6ea7e1022d73d3db63149dfae11a3.svg" alt="Blogs" width="30px" />&nbsp; Blogs</Link>
                        <Link class="list-group-item list-group-item-action" to="/books"><img src="https://freewsad.com/static/media/book.9dde37e6b9991f9dc372d1bf439fbd27.svg" alt="Books" width="30px" />&nbsp; Books</Link>
                        <Link class="list-group-item list-group-item-action" to="/about"><img src="https://freewsad.com/static/media/about.620fd192d0da633ff62e07bc137f2586.svg" alt="About Us" width="30px" />&nbsp; About Us</Link>
                        <Link class="list-group-item list-group-item-action" to="/contact"><img src="https://freewsad.com/static/media/contact.86ee0cf982eb82e34aa193fd9f4be963.svg" alt="Contact Us" width="30px" />&nbsp; Contact Us</Link>
                        <Link class="list-group-item list-group-item-action" to="/policy"><img src="https://freewsad.com/static/media/privacy.a558d71c7124bf73ca84574994682e86.svg" alt="Privacy Policy" width="30px" />&nbsp; Privacy Policy</Link>
                        <Link class="list-group-item list-group-item-action" to="/language"><img src="https://freewsad.com/static/media/location.b84e1cdeeb53b0176b93cafbb38bc804.svg" alt="Language" width="30px" />&nbsp; Language</Link>
                        <span class="list-group-item list-group-item-action pointer"><img src="https://freewsad.com/static/media/logout.a9ac2943751d1a994e54a373ebbac984.svg" alt="Logout" width="30px" />&nbsp; Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
