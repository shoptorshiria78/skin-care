import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {MdLocationOn} from 'react-icons/md'
import{TfiEmail} from 'react-icons/tfi'
import{BsTelephoneFill} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className="max-w-[400px] md:max-w-[750px] lg:max-w-[1100px] mx-auto">
            <Helmet>
                <title>Corporate Amusement | Contact Us</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="my-12 w-full md:w-5/6 lg:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 ">
                <div className=" col-span-2  rounded w-[400px] md:w-[400px] lg:w-[600px] bg-gradient-to-r from-red-200 to-cyan-100 ">
                    <form className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Name" className="input input-bordered bg-blue-100 " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input required name='image' type="text" placeholder="Phone Number" className="input input-bordered bg-blue-100 " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered bg-blue-100 " required />
                        </div>
                        <div className=" w-full">
                            <label className="label">
                                <span className="label-text"> Give FeedBack</span>
                            </label>
                            <textarea className="border-2 w-full rounded-xl p-2 bg-blue-100" placeholder="Write Your Message Here.." name="" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="w-[150px] px-4 py-3 rounded-xl text-white bg-gradient-to-r from-red-500 to-cyan-400">send</button>
                        </div>
                    </form>
                </div>
                <div>
                    <div className=" p-8 rounded w-[400px] md:w-[250px] lg:w-[300px] bg-violet-100">
                        <h1 className="text-3xl py-5">Contact Info</h1>
                        <p className="flex items-center"><span className="mr-4 "><MdLocationOn  className="w-5 h-5 text-cyan-500"></MdLocationOn></span>2912 Meadowbrook Road <br /> Los Angles, CA</p>
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

export default ContactUs;