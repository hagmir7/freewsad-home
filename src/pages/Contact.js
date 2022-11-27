import React from 'react';
import SEO from '../components/SEO/SEO';

export default function Contact() {
  return (
    <div className='container'>
        <div className="row justify-content-center my-3">
            <div className="col-md-6">
                <h1 className='h3'>Contact Us</h1>
                <form action="">
                    <label htmlFor="name">Full name</label>
                    <input type="text" maxLength={60} placeholder="Full name..." className="form-control rounded-pill" name='name'/>
                    <label htmlFor="email">Email</label>
                    <input type="text" maxLength={60} placeholder="Email.." className="form-control rounded-pill" name="email"/>
                    <label htmlFor="body">Full name</label>
                    <textarea name="body" id="body" placeholder='Message...' cols="30" rows="5" className='form-control contact-body'></textarea>
                    <input type="submit" value="Send" className='btn btn-primary w-100 mt-3 rounded-pill' />
                </form>
            </div>
        </div>
        <SEO
          title='Contact Us - Freewsad'
          description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
          name='freewsad.com'
          type='website'
          image='/favicon.webp'
          url="https://www.freewsad.com/contact"
          canonical="/contact" />
    </div>
  )
}
