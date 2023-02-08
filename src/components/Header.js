import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { SearchOutlined, 
  CloseOutlined,
  BookOutlined,
  MessageOutlined,
  UserOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined

} from '@ant-design/icons';

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
      label: User ? <Link to={User.username} className="ant-dropdown-trigger d-flex"><UserOutlined className='mt-1' /> &#xa0;{t("Profile")}</Link> : '',
      key: '0',
      auth: true
    },
    {
      label: User ? <Link to='/contact' className="ant-dropdown-trigger d-flex"><MessageOutlined className='mt-1' />  &#xa0;{t("Contact Us")}</Link> : '',
      key: '1',
    },
    {
      label: <Link to='/privacy' className="ant-dropdown-trigger d-flex"><ExclamationCircleOutlined className='mt-1' />  &#xa0;{t("Privacy")}</Link>,
      key: '4',
    },
    {
      type: 'divider',
    },
    {
      label: <a onClick={logout} className="ant-dropdown-trigger d-flex"><LogoutOutlined className="mt-1"/>  &#xa0;{t("Logout")}</a>,
      key: '3',
    },
  ];




  return (
    <header className="navbar-light position-sticky top-0 header-static border-bottom bg-white ">
      <div className="navbar navbar-expand-lg p-0 position-relative">
        <div className="d-flex justify-content-between w-100 px-3">
          <div className='logo-content'>
            <Link className="nav-item logo h4  m-0 my-1 h1" to="/">
              <img width="auto" height="45px" title="Freewsad" loading="eager" src="/freewsad-item.webp" alt="Freewsad" />
            </Link>
          </div>
          <div className="navbar-top d-none d-lg-block small bg-white mb-0">
            <nav className="d-flex justify-content-between p-2 pb-0 nav">
              <Link to='/' className='nav-item mx-4' >
                <img title="Home" loading="eager" className="nav-icon" src="/assets/new/home.svg" alt="Home" width="30px" height="30px" />
              </Link>
              <Link to='/books' className='nav-item mx-4' >
                <img title="Books" loading="eager" className="nav-icon" src="/assets/new/book.png" alt="Books" width="30px" height="30px" />
              </Link>

              <Link to='/blog' className='nav-item mx-4' >
                <img title="Blog" loading="eager" className="nav-icon" src="/assets/new/post.png" alt="Blog" width="30px" height="30px" />
              </Link>

              <span className='nav-item mx-4 pointer' onClick={() => {setSearch(true); setTimeout(()=> {document.querySelector('#search').focus()}, 100)}}>
                <img title="Blog" loading="eager" className="nav-icon" src="/assets/new/search.png" alt="Search" width="30px" height="30px" />
              </span>
              {
                User ?
                  <>
                    <Link to={User.username} className='nav-item mx-4' >
                      <img title="Profile" loading="eager" className="nav-icon" src="/assets/new/user.png" alt="Profile" width="30px" height="30px" />
                    </Link>
                  </>
                  : ''
              }
            </nav>
          </div>
          <div className="d-none d-lg-block my-1" style={{zIndex: 100}}>
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
          <span onClick={() => {setSearch(true); setTimeout(()=> {document.querySelector('#search').focus()}, 100)}} className="navbar-toggler border-0 mt-2 p-0">
             <span className="d-none">{t("Searhc")}</span><SearchOutlined />
          </span>
          

          <Link className="navbar-toggler border-0 mt-2 p-0" to="/contact">
            <span className="d-none">{t("Contact")}</span><MessageOutlined />
          </Link>

          <Link className="navbar-toggler border-0 mt-2 p-0" to="/books">
            <span className="d-none">{t("Books")}</span><BookOutlined />
          </Link>

          <Link className="navbar-toggler border-0 mt-2 p-0" to="/menu">
            <span className="d-none">{t("Menu")}</span><span className="navbar-toggler-icon"></span>
          </Link>
        </div>
        {
          !search ? '' : (
            <div className='position-absolute m-auto row p-0 w-100 d-flex justify-content-center'>
              <div className='col-md-6 p-0 m-0 position-relative' ><SearchBook delete={(
                <span class="input-group-text pointer" onClick={() => setSearch(false)} id="basic-addon1"><CloseOutlined /></span>
              )} /></div>
            </div>
          )
        }

      </div>


    </header>
  )
}
