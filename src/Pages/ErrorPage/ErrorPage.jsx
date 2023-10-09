import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" flex flex-col space-y-3 justify-center items-center h-[80vh]">
            <p className="text-4xl font-bold">404 Not Found</p>
            <p className="text-2xl font-semibold">Go To Home</p>
            <Link to='/'><button className="h-12 px-8 rounded bg-fuchsia-800 text-white">Home</button></Link>
        </div>
    );
};

export default ErrorPage;