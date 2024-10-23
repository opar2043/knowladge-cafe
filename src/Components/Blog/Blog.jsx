
import { IoBookmark } from "react-icons/io5";

import PropTypes from 'prop-types'
import Blogs from "../Blogs/Blogs";

const Blog = ({blog , handelBookMark , handleReadingTime}) => {
    // console.log(blog);

    // console.log(handleReadingTime);
    let { cover, title , author_img , author , posted_date , hashtags , reading_time , id} = blog;

  return (
    <div className="py-4 border-b shadow rounded mb-3 px-2">
        <img src={cover} alt="" className="w-full" />
        <div className="flex justify-between p-2 py-4 items-center flex-col md:flex-row">

            <div className="w-30 flex  justify-center gap-2 items-center py-2">
                <img src={author_img} alt="" className=" w-12 rounded-full" />
                <div>
                    <h3 className="text-lg font-semibold">{author}</h3>
                    <span className="text-sm text-gray-400">March 14 , 4 days ago</span>
                </div>
            </div>

            <div className="flex gap-1">
                 <span className="text-sm text-gray-700 font-semibold">{reading_time } min ago</span>
                 <button className="text-2xl text-red-600" onClick={()=>handelBookMark(blog)}><IoBookmark></IoBookmark></button>
            </div>

        </div>
        <p className="font-bold text-2xl py-2">{title}</p>
        <p className="pb-2">
            {
                hashtags.map(( hash , idx) => <span className="px-1 text-sm text-gray-500 font-semibold" key={idx}>#{hash}</span>)
            }
        </p>

        <button className="underline underline-offset-3  text-teal-700 font-bold"  
           onClick={()=>handleReadingTime(reading_time , id)}
        >Mark as Read</button>
    </div>
  )
}

Blogs.propTypes = {
    blogs: PropTypes.object.isRequired
}


export default Blog
