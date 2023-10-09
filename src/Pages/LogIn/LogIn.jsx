import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert'
import { Helmet } from "react-helmet-async";


const LogIn = () => {

    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Congratulation", "User logged in", "success")
                e.target.reset()
                navigate(location?.state ? location.state :'/');
            })
            .catch(error => {
                console.error(error)
                swal(`${ error}`)
                e.target.reset()
            })

    }

    return (
        <div className=" bg-[#e0de4c24] py-5">
            <Helmet>
                <title>Corporate Amusement | login page</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="hero min-h-screen mt-10 mb-10 ">
                <div >
                    <div className=" w-[400px] bg-gradient-to-r from-red-200 to-lime-100">
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered bg-violet-100 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full bg-violet-100 " required />
                                    <span className="absolute top-4 left-[310px] " onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ?<FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> 
                                                
                                        } </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full px-4 py-3 rounded-xl text-white bg-violet-400">Log In</button>
                            </div>
                        </form>

                        <p className=" text-center py-8 mb-8">Do not have any Account ? <Link className="text-violet-600 underline" to='/register'>Register</Link></p>
                    </div>

                    <div className="mx-auto my-10 flex flex-col  w-[400px]">
                        <button className=" flex bg-violet-500 text-white items-center w-full p-2 rounded-full border-violet-600 border-2 "><BsGithub></BsGithub> <span className="ml-24"> Continue with github</span></button>
                        <button className=" flex bg-violet-500 text-white items-center w-full p-2 mt-3 rounded-full border-violet-600 border-2 "><BsGoogle></BsGoogle> <span className="ml-24">Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;