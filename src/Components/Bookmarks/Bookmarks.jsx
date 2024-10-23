import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark , readingTime}) => {
  console.log(bookmark);
  return (
    <div className="md:w-1/3 bg-slate-200 p-5 rounded-md">
      <div className="p-3 rounded-md bg-orange-400 my-2  text-center font-bold">
        <h2>Tottal Reading Time: {readingTime}</h2>
      </div>

      <h2 className="bg-teal-600 text-center text-white font-semibold text-lg py-3 rounded-lg">BookMark : {bookmark.length}</h2>
    
       {
        bookmark.map((oneBook,idx) => <Bookmark 
           key={idx}
           oneBook={oneBook}
        ></Bookmark>)
       }
    </div>
  )
}

export default Bookmarks