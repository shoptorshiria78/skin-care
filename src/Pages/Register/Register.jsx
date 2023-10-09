import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert'
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { register, googleLogIn, gitHubLogIn, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        console.log('clicked')
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
            return swal('Error,Please Input a valid email, error')
        }

        if (!(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/).test(password)) {
            return swal('Error', 'Your password should have at least 1 upper case letter, 1 special character and 6 character long', 'error')
        }


        register(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Congratulation", "User has been created Successfully", "success")
                e.target.reset()
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })
                    .then(() => { window.reload()})
                    .catch(error => console.error(error))

                logOut()
                    .then()
                    .catch(error => {
                        console.error(error);
                    })

                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                swal("Error", `${error.Firebase}`, "error")
            })

    }

    const handleGoogleLogIn = () => {

        googleLogIn()
            .then()
            .catch()
    }

    const handleGitHubLogIn = () => {
        gitHubLogIn()
            .then()
            .catch()
    }

    return (
        <div className=" bg-[#e0de4c24] py-5">
            <Helmet>
                <title>Corporate Amusement | Register page</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="hero min-h-screen mt-10 mb-10 ">
                <div >
                    <div className=" w-[400px] bg-gradient-to-r from-red-200 to-lime-100">
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered bg-violet-100 " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input required name='image' type="text" placeholder="Image URL" className="input input-bordered bg-violet-100 " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered bg-violet-100 " required />
                            </div>
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full bg-violet-100 " required />
                                <span className="absolute top-[54px] left-[310px] " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>

                                    } </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full px-4 py-3 rounded-xl text-white bg-violet-400">Register</button>
                            </div>
                        </form>

                        <p className=" text-center py-8 mb-8">Already Have an Account ? <Link className="text-violet-600 underline" to='/login'>Login</Link></p>
                    </div>
                    <div className="mx-auto my-10 flex flex-col  w-[400px]">
                        <button onClick={handleGitHubLogIn} className=" flex bg-violet-500 text-white items-center w-full p-2 rounded-full border-violet-600 border-2 "><BsGithub></BsGithub> <span className="ml-24"> Continue with github</span></button>
                        <button onClick={handleGoogleLogIn} className=" flex bg-violet-500 text-white items-center w-full p-2 mt-3 rounded-full border-violet-600 border-2 "><BsGoogle></BsGoogle> <span className="ml-24">Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;