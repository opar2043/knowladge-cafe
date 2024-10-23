import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";

export default function Blogs({handelBookMark , handleReadingTime}){


    const [blogs , setBlogs] = useState([])

    useEffect(()=>{
         fetch('data.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
    },[])

    // console.log(blogs);

  return (
    <div className="md:w-2/3 bg-slate-50">
      
          {
            blogs.map(blog => <Blog  
                key = {blog.id}
                blog ={blog}
                handelBookMark = {handelBookMark}
                handleReadingTime = {handleReadingTime}
            ></Blog>)
          }
    </div>
  )
}
