
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'

function App() {
  
const [bookmarks, setBookmarks] = useState([])
const handleAddBookmark = Blog=>{
  // console.log(Blog);
  const newBookMarkes = [...bookmarks, Blog];
  setBookmarks(newBookMarkes);
}
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
    {/* <Bookmarks Bookmarks = {bookmarks} ></Bookmarks> */}
    <Bookmarks  Bookmarks = {bookmarks} ></Bookmarks>
    </div>
     
    </>
  )
}

export default App
