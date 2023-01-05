import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom'
import API from '../api/API';
import ProfileCard from '../components/Profile/ProfileCard';

import ProfileCardAbout from '../components/Profile/ProfileCardAbout';
import SocialCard from '../components/Profile/SocialCard';
import SEO from '../components/SEO/SEO';
import AuthContext from '../context/AuthContext';
import NotFound from './404';
import ProfileUpdate from './ProfileUpdate';

export default function Profile() {




  const [update, setUpdate] = React.useState(false);
  const { username } = useParams();
  const [user, setUser] = React.useState(null);
  const [result, setResult] = React.useState(true);
  const { t } = useTranslation()
  const { User } = useContext(AuthContext)



  React.useEffect(() => {
    getUser();
  }, [])


  const getUser = async () => {
    await API.get(`user/${username}`, {
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(respons => {
      setUser({ ...respons.data[0], ...respons.data[1] })
    }).catch(error => {
      setResult(false)
    })
  }





  if (result) {
    return (
      <div className="container-sm mt-3">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                {
                  user ? <>
                    <ProfileCard image={user.avatar} firstName={user.first_name} lastName={user.last_name} bio={user.bio} />
                    <SEO
                      title={`${user.first_name} ${user.last_name} - Freewsad`}
                      description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
                      name='freewsad.com'
                      type='website'
                      image='/favicon.webp'
                      url="https://www.freewsad.com/blog"
                      canonical="/blog" />
                  </>
                    :
                    <div className="border-0 loading m-2">
                      <div className="image rounded"></div>
                      <div className="content"><div></div></div>
                    </div>
                }
              </div>
              <SocialCard />
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                {
                  update ? User.username === user.username  ?
                    <ProfileUpdate
                    
                        first_name={User.first_name}
                        last_name={User.last_name}
                        phone={User.phone}
                        email={User.email}
                        city={User.city}
                        country={User.country}
                        birth={User.birth}
                    /> : ''
                    : user ?
                      <ProfileCardAbout
                        firstName={user.first_name}
                        lastName={user.last_name}
                        phone={user.phone}
                        email={user.email}
                        city={user.city}
                        country={user.country}
                        username={user.username}
                      /> :
                      <div className="loading mx-3">
                        <div className="content"><div></div></div>
                        <div className="content"><div></div></div>
                        <div className="content"><div></div></div>
                        <div className="content"><div></div></div>
                        <div className="content"><div></div></div>
                        <div className="content"><div></div></div>
                      </div>
                }
                <hr />
                <div className="row mb-2 mx-2">
                  <div className="col-sm-12">
                    {
                      user && User ?
                      User.username === user.username ?
                      update ? 
                      <>
                        <button onClick={() => { setUpdate(false) }} className="btn btn-primary rounded-pill px-3 mx-2">← {t("Back")}</button>
                        <button className="btn btn-primary rounded-pill px-3 mx-2">{t("Save")}</button>
                      </>
                        : <button onClick={() => setUpdate(true)} className="btn btn-primary rounded-pill px-3">{t("Edit")}</button>
                      : ""
                      : ""
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  } else {
    return (<NotFound />)
  }
}
