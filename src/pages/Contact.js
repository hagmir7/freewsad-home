import { message } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import API from '../api/API';
import SEO from '../components/SEO/SEO';

export default function Contact() {
  const { t } = useTranslation();
  const history = useNavigate()


  const sendMessage = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    await API.post('/contact', form , {
      headers:{
        "Content-Type": 'application/json'
      }
    }).then(respons =>{
      message.success(respons.data.message)
      e.target.reset()
      history('/');

    }).catch(error=>{
      message.error(error.message)
    })
  }
  return (
    <div className='container'>
        <div className="row justify-content-center my-3">
            <div className="col-md-6">
                <h1 className='h3'>{t("Contact Us")}</h1>
                <form onSubmit={sendMessage}>
                    <label htmlFor="name">{t("Full name")}</label>
                    <input type="text" maxLength={60} placeholder={t("Full name") + "..."} className="form-control rounded-pill" name='name'/>
                    <label htmlFor="email">{t("Email")}</label>
                    <input type="text" maxLength={60} placeholder={t("Email") + "..."} className="form-control rounded-pill" name="email"/>
                    <label htmlFor="body">{t("Message")}</label>
                    <textarea name="body" id="body" placeholder={t("Message") + "..."} cols="30" rows="5" className='form-control contact-body'></textarea>
                    <input type="submit" value={t("Send")} className='btn btn-primary w-100 mt-3 rounded-pill' />
                </form>
            </div>
        </div>
        <SEO
          title={t('Contact Us - Freewsad')}
          description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
          name='freewsad.com'
          type='website'
          image='/favicon.webp'
          url="https://www.freewsad.com/contact"
          canonical="/contact" />
    </div>
  )
}
