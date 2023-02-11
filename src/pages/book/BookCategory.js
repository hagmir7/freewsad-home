import React from 'react'
import { useParams } from 'react-router-dom';
import BookCards from '../../components/Book/BookCards';
import SEO from '../../components/SEO/SEO';

export default function BookCategory() {

  const { category } = useParams();
  return (
    <div>
      <h1 hidden>Download Free {category} Books - Freewsad</h1>
      <BookCards />



      <SEO
        title={`Download Free ${category} Books - Freewsad`}
        description="You can enjoy the Books and Courses you love and download the original content, and share it all with your friends in FreeWsad."
        name='freewsad.com'
        type='website'
        image='/favicon.webp'
        url="https://www.freewsad.com/books"
        canonical="/books" />
    </div>
  )
}
