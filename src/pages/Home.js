import React from 'react';
import PostCards from '../components/Post/PostCards';
import SEO from '../components/SEO/SEO';
import BookCards from '../components/Book/BookCards';





export default function Home() {

  return (
    <div className='container'>
      <h1 hidden>Freewsad - The best website for Education.</h1>
      {/* <div className='row d-flex justify-content-center'>
        <Search />
      </div> */}
      <BookCards />
      <div className='mt-3'>

      <PostCards />
      </div>


      <SEO
        title='FreeWsad - The Best Website For Education'
        description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
        name='freewsad.com'
        type='website'
        image='/favicon.webp'
        url="https://www.freewsad.com"
         />
    </div>
  )
}
