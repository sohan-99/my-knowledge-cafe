/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, profile_img,reading_time,author,posted_date,hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex'>
                <div className='flex'>
                    <img className='w-14' src={profile_img} alt="" />
<div className='ml-6'>
    <h3 className='text-4xl'>{author}</h3>
    <p>{posted_date}</p>
</div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((has,i) => <span key ={i} className='ml-6'><a href="">#{has}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {

    Blog: PropTypes.object.isRequired
}
export default Blog;


