import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Post from '../components/Post/Post';
import NotFound from '../pages/404';
import Blog from '../pages/Blog';
import Books from '../pages/Books';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Book } from '../pages/Book';
import About from '../pages/About';
import Privacy from '../pages/Privacy';
import CreateFile from '../pages/CreateFile';
import CreateBook from '../pages/book/CreateBook';
import { MyEditor } from '../pages/post/CreatePost';
import BookCategory from '../pages/book/BookCategory';


export default function Urls() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/p/:slug' element={<Post />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/books" element={<Books />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:username' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/accounts/login' element={<Login />} />
          <Route path='/accounts/register' element={<Register />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/book' element={<Book />} />
          <Route path='/about' element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path='/create/file' element={<CreateFile />} />
          <Route path='/create/book' element={<CreateBook />} />
          <Route path='/create/post' element={<MyEditor />} />
          <Route path='/books/:category' element={<BookCategory />} />
        </Routes>

    </div>
  )
}
