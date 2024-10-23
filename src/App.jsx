
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmark , setBookmark] = useState([])
  const [readingTime , setReadingTime] = useState(0)

  function handelBookMark(blog){
     console.log('clicking BookMark');
     const newBookmark = [...bookmark , blog];
     setBookmark(newBookmark)
  }


  function handleReadingTime(time , id){
        setReadingTime(readingTime + time)
        console.log('rermain - id' , id);

        let remainingBookmarks = bookmark.filter(book => book.id !== id);
        setBookmark(remainingBookmarks)
  }

  return ( 
    <div className='w-10/12 mx-auto p-1'>
             <Header></Header>
         <div className='md:flex gap-2 p-4 mt-10 shadow-md'>
             <Blogs  handelBookMark={handelBookMark} handleReadingTime = {handleReadingTime}></Blogs>
             <Bookmarks bookmark = {bookmark} readingTime={readingTime}></Bookmarks>
         </div>
         
        
          
    </div>
  )
}

export default App
