
import PropTypes from 'prop-types';
import { BsBookmark} from 'react-icons/bs';

const Blog = ({ blog, handleAddBookmark }) => {
    const { title, cover, profile_img, reading_time, author, posted_date, hashtags } = blog;
    return (
        <div className='mt-20 mb-8'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                    <img className='w-14' src={profile_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-4xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-red-600 text-2xl'><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((has, i) => <span key={i} className='ml-6'><a href="">#{has}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {

    Blog: PropTypes.object.isRequired,
    // handleAddBookmark: propTypes.func
}
export default Blog;


