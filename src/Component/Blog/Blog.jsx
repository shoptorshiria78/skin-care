import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {img,title,description,reporter} = blog;
    
    return (
        <div className=" px-3 py-3 bg-purple-200 mt-7">
        <figure className="">
            <img src={img} alt="people" className="rounded w-[330px] h-52" />
        </figure>
        <div className=" mt-4 space-y-2  ">
            <h2 className="card-title text-center text-purple-600">{title}</h2>
            <p className='text-[#46454599] flex-grow'>{description.slice(0,100)} ... <span className='font-bold'>Read More</span></p>
            <div className=' flex justify-between w-full text-purple-500 font-bold'>
            <p>Reporter:{reporter}</p>
            </div>
            
        </div>
    </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;