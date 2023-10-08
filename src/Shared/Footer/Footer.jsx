import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-600 text-base-content rounded">
           
           <div>
                    <div className="text-3xl font-bold text-[#E55473]">Corporate</div>
                    <div className="text-xl text-red-400 "><span className="text-2xl font-bold text-red-500">A</span>musement</div>
                </div>

            <nav className="grid grid-cols-4 gap-2 text-white">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">FAQ</a>
            </nav>
          
            
               
            
            <div className="flex justify-around">
            <div className="grid  grid-flow-col gap-4">
                    <a><FaFacebook className="w-5 h-5 text-white"></FaFacebook>
                    </a>
                    <a><FaGoogle className="w-5 h-5 text-white"></FaGoogle></a>
                    <a><FaGithub className="w-5 h-5 text-white"></FaGithub></a>
                </div>
                
                <div className="flex relative ml-5 ">
                    <input className="border-2 px-2 w-[200px] h-8 py-1 rounded-l" type="text" /> <button className="text-white bg-cyan-600 absolute left-[200px] rounded-r w-20 border-cyan-600 h-8  py-1"> Search </button>
                </div>

            </div>
            <aside>
                <p className="text-white">Copyright © 2023 - All right reserved by Corporate Amusement Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;