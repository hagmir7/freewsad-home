import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { SearchOutlined, CloseOutlined, BookOutlined } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';
import SearchBook from './Book/SearchBook';


export default function Header() {
  const { User, logout } = React.useContext(AuthContext);
  const [search, setSearch] = React.useState(false);
  const { t } = useTranslation();


  React.useEffect(()=>{
    setSearch(false)
  }, [window.location.pathname])






  const items = [
    {
      label: User ? <Link to={User.username} className="ant-dropdown-trigger">{t("Profile")}</Link> : '',
      key: '0',
      auth: true
    },
    {
      label: User ? <Link to='/contact' className="ant-dropdown-trigger">{t("Contact Us")}</Link> : '',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <a onClick={logout} className="ant-dropdown-trigger">{t("Logout")}</a>,
      key: '3',
    },
  ];

  


  return (
    <header className="navbar-light position-sticky top-0 header-static border-bottom bg-white ">
      <div className="navbar navbar-expand-lg p-0 position-relative">
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


              <Link to='/contact' className='nav-item mx-3' >
                <img title="Contact" loading="eager" className="nav-icon" src="/assets/img/svg/support.svg" alt="Contact" width="30px" height="30px" />
              </Link>
              <Link to='/blog' className='nav-item mx-3' >
                <img title="Blog" loading="eager" className="nav-icon" src="/assets/img/svg/post.svg" alt="Blog" width="30px" height="30px" />
              </Link>

              <span className='nav-item mx-3 pointer' onClick={() => setSearch(true)}>
                <img title="Blog" loading="eager" className="nav-icon" src="/assets/img/svg/search.svg" alt="Search" width="30px" height="30px" />
              </span>
              {
                User ?
                  <>
                    <Link to={User.username} className='nav-item mx-3' >
                      <img title="Profile" loading="eager" className="nav-icon" src="/assets/img/svg/about.svg" alt="Profile" width="30px" height="30px" />
                    </Link>
                  </>
                  : ''
              }
            </nav>
          </div>
          <div className="d-none d-lg-block my-1">
            {
              !User ?
                <>
                  <Link className="btn-primary btn rounded-pill mx-2" to="/accounts/login">{t("Log in")}</Link>
                  <Link className="border btn rounded-pill mx-2" to="/accounts/register">{t("Register")}</Link>
                </>
                :



                <Dropdown menu={{ items,  }} trigger={['click']} >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space> <img src={User.avatar} width="40px" loading="eager" height="40" className="cover border rounded-pill pointer" title={User.username} alt={User.username} /></Space>
                  </a>


                </Dropdown>
            }

          </div>
          <Link className="navbar-toggler border-0 mt-2 p-0" to="/books">
            <span className="d-none">{t("Books")}</span><BookOutlined />
          </Link>
          <span onClick={() => setSearch(true)} className="navbar-toggler border-0 mt-2 p-0">
          <span className="d-none">{t("Books")}</span><SearchOutlined />
          </span>
          <Link className="navbar-toggler border-0 mt-2 p-0" to="/menu">
            <span className="d-none">{t("Menu")}</span><span className="navbar-toggler-icon"></span>
          </Link>
        </div>
        {
          !search ? '' : (
            <div className='position-absolute row p-0 m-0  d-flex justify-content-center'>
              <div className='col-md-6 p-0 m-0'><SearchBook delete={(
                <span class="input-group-text pointer" onClick={() => setSearch(false)} id="basic-addon1"><CloseOutlined /></span>
              )} /></div>
            </div>
          )
        }

      </div>


    </header>
  )
}
