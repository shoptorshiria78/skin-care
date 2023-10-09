import { useEffect, useState } from "react";
import swal from 'sweetalert';
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import OrderedCard from "../../Component/OrderedCard/OrderedCard";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { Helmet } from "react-helmet-async";

const MyOrder = () => {

    const [orderedCard, setOrderedCard] = useState([]);
    const [seeAllButton, setSeeAllButton] = useState(false);

    useEffect(() => {
        const orderedItems = JSON.parse(localStorage.getItem('order'));
        if (orderedItems) {
            const length = orderedItems.length;
            length < 1 ? setOrderedCard(orderedItems) : setOrderedCard(orderedItems.slice(0, 1));

            length > 1 ? setSeeAllButton(true) : setSeeAllButton(false);
        }

        else {

            swal("Oops", "You Have Not Ordered yet", "error");
        }
    }, [])

    const handleSeeAllButton = () => {
        const orderedItems = JSON.parse(localStorage.getItem('order'));
        setOrderedCard(orderedItems);
        setSeeAllButton(false);
    }

    return (
        <div>
            <Helmet>
                <title>Corporate Amusement | MyOrder page</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="max-w-[1100px] mx-3 md:mx-4 lg:mx-auto mt-12 gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 " >
                    <div >
                        <div className=" w-[400px] md:w-[470px] lg:w-[800px]">
                            {
                                orderedCard.map((card, idx) => <OrderedCard card={card} key={idx}></OrderedCard>)
                            }
                        </div>
                        <div className="flex justify-center items-center my-10">

                            {
                                seeAllButton && <button onClick={handleSeeAllButton} className={"text-lg bg-[#009444] text-white text-center h-10 rounded px-6 "}>See All</button>
                            }


                        </div>

                    </div>


                </div>
                <div>
                    <div className=" p-12 rounded w-[400px] md:w-[250px] lg:w-[300px] bg-violet-100 mt-4">
                        <h1 className="text-3xl py-5">Contact Info</h1>
                        <p className="flex items-center"><span className="mr-4 "><MdLocationOn className="w-5 h-5 text-cyan-500"></MdLocationOn></span>2912 Meadowbrook Road <br /> Los Angles, CA</p>
                        <p className="flex items-center"> <span className="mr-4"><TfiEmail className="w-5 h-5 text-cyan-500"></TfiEmail></span> corporateas@gmail.com</p>
                        <p className="flex items-center"> <span className="mr-4"><BsTelephoneFill className="w-5 h-5 text-cyan-500"></BsTelephoneFill></span> 310-386-1623</p>

                        <div className="grid py-5  grid-flow-col gap-4">
                            <a><FaFacebook className="w-5 h-5 text-cyan-500"></FaFacebook>
                            </a>
                            <a><FaGoogle className="w-5 h-5 text-cyan-500"></FaGoogle></a>
                            <a><FaGithub className="w-5 h-5 text-cyan-500"></FaGithub></a>
                            <a><AiOutlineTwitter className="w-5 h-5 text-cyan-500"></AiOutlineTwitter></a>
                            <a><AiFillLinkedin className="w-5 h-5 text-cyan-500"></AiFillLinkedin></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;