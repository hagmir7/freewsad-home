import React from 'react'
import PostCards from '../components/Post/PostCards'
import SEO from '../components/SEO/SEO'

export default function Blog() {
  return (
    <div className='container mt-3'>
      <SEO
        title='Blog - Freewsad'
        description="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad."
        name='freewsad.com'
        type='website'
        image='/favicon.webp'
        url="https://www.freewsad.com/blog"
        canonical="/blog" />
      <PostCards />
    </div>
  )
}
