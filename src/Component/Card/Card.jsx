import PropTypes from 'prop-types';
import { BsStar } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const Card = ({ card }) => {

    const navigate = useNavigate();
    const {id,img,title,description,price,rating} = card;

    const handleDetails=()=>{
        navigate(`/services/${id}`)
    }

    return (
        <div className=" px-3 py-3 bg-[#e0e1f1] mt-7">
            <figure className="">
                <img src={img} alt="people" className="rounded w-[330px] h-52" />
            </figure>
            <div className=" mt-4 space-y-2 ">
                <h2 className="card-title text-center text-[#4a54ec] ">{title}</h2>
                <p className='text-[#46454599]'>{description.slice(0,200)} ... <span className='font-bold'>Read More</span></p>
                <div className=' flex justify-between w-full text-[#7b83f3] font-bold'>
                <p>Price : {price} $</p>
                <p className='flex items-center'>Rating: {rating}<BsStar className='ml-2'></BsStar></p>
                </div>
                <div className="card-actions flex justify-center mt-3  ">
                    <button onClick={handleDetails} className=" bg-[#473fed] text-white w-full my-3 py-2 rounded-xl">Details</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes ={
    card:PropTypes.object.isRequired
}

export default Card;