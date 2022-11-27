import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="navbar-light position-sticky top-0 header-static border-bottom bg-white">
      <div className="navbar navbar-expand-lg p-0">
        <div className="d-flex justify-content-between w-100 px-3">
          <div>
            <Link className="nav-item logo h4  m-0 my-1 h1" to="/">
              <img width="auto" height="45px" title="Freewsad" loading="eager" src="/freewsad-item.webp" alt="Freewsad" />
            </Link>
          </div>
          <div className="navbar-top d-none d-lg-block small bg-white mb-0">
            <nav className="d-flex justify-content-between p-2 pb-0 nav">
              <Link to='/' className='nav-item mx-3' >
                <img title="Home" loading="eager" className="nav-icon" src="/assets/img/svg/home.svg" alt="Home" width="30px" height="30px" />
              </Link>
              <Link to='/books' className='nav-item mx-3' >
                <img title="Books" loading="eager" className="nav-icon" src="/assets/img/svg/book-1.svg" alt="Books" width="30px" height="30px" />
              </Link>
              <Link to='/profile' className='nav-item mx-3' >
                <img title="Profile" loading="eager" className="nav-icon" src="/assets/img/svg/about.svg" alt="Profile" width="30px" height="30px" />
              </Link>
              <Link to='/contact' className='nav-item mx-3' >
                <img title="Contact" loading="eager" className="nav-icon" src="/assets/img/svg/support.svg" alt="Contact" width="30px" height="30px" />
              </Link>
              <Link to='/blog' className='nav-item mx-3' >
                <img title="Blog" loading="eager" className="nav-icon" src="/assets/img/svg/post.svg" alt="Blog" width="30px" height="30px" />
              </Link>
            </nav>
          </div>
          <div className="d-none d-lg-block mt-1">
            <a className="btn-primary btn rounded-pill mx-2"  href="https://studio.freewsad.com/accounts/login">Log in</a>
            <a className="border btn rounded-pill mx-2" href="https://studio.freewsad.com/accounts/register">Register</a>
          </div>
            <Link className="navbar-toggler border-0 mt-2 p-0" to="/menu">
              <span className="d-none">Menu</span><span className="navbar-toggler-icon"></span>
            </Link>
        </div>
      </div>
    </header>
  )
}
