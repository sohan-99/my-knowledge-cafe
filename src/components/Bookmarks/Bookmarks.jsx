import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 mt-8 bg-gray-300 ml-4 rounded-lg">
            <h2 className="text-3xl text-center mt-4">bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,i)=><Bookmark key={i} bookmark={bookmark} ></Bookmark>)
               
            }
        </div>
    );

};
export default Bookmarks;