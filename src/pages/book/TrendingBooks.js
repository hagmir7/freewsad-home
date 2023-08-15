import React from 'react';
import BookCards from '../../components/Book/BookCards';
import SEO from '../../components/SEO/SEO';

export default function TrendingBooks() {
    return (
      <div>
        <h1 hidden>Download Free Books - Freewsad</h1>
        <div className="container">
          <BookCards url="books/trending" />
        </div>

        <SEO
          title="Download Free Books - Freewsad"
          description="With FreeWsad Get instant access to a vast collection of free PDF books on a wide range of subjects. Download and read high-quality books for free."
          name="freewsad.com"
          type="website"
          image="/favicon.webp"
          url="https://www.freewsad.com/books"
          canonical="/books"
        />
      </div>
    );
}
