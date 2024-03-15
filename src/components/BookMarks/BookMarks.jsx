import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({bookmarks, readingTime}) => {
    return (

        <div className="md:w-1/3 bg-gray-200 rounded-lg">
            <h3 className='text-3xl p-6 text-center'>Reading Time: {readingTime}</h3>
            <h2 className="text-3xl text-center p-4 font-bold">BookMarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
            }
        </div>

    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default BookMarks;