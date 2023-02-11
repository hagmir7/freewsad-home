import React from 'react';
import BookCards from '../components/Book/BookCards';
import SEO from '../components/SEO/SEO';

export default function Books() {
  return (
    <div>
      <h1 hidden>Download Free Books - Freewsad</h1>
      <BookCards />


      
      <SEO
        title='Download Free Books - Freewsad'
        description="You can enjoy the Books and Courses you love and download the original content, and share it all with your friends in FreeWsad."
        name='freewsad.com'
        type='website'
        image='/favicon.webp'
        url="https://www.freewsad.com/books"
        canonical="/books" />
    </div>
  )
}
