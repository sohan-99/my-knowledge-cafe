
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'

function App() {
  
const [bookmarks, setBookmarks] = useState([])
const [reading, setReading]= useState(0)
const handleAddBookmark = Blog=>{
  // console.log(Blog);
  const newBookMarkes = [...bookmarks, Blog];
  setBookmarks(newBookMarkes);
}
const handleMarkasRead= time =>{
  // console.log('mark as read', time);
  const newReading = reading + parseFloat(time);
  console.log(newReading);
  setReading(newReading)
}


  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark} handleMarkasRead={handleMarkasRead}></Blogs>
    {/* <Bookmarks Bookmarks = {bookmarks} ></Bookmarks> */}
    <Bookmarks  bookmarks = {bookmarks} reading={reading} ></Bookmarks>
    </div>
     
    </>
  )
}

export default App


