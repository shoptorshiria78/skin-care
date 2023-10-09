import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Corporate Amusement | Error page</title>
            </Helmet>
            <div className=" flex flex-col space-y-3 justify-center items-center h-[80vh]">
                <p className="text-4xl font-bold">404 Not Found</p>
                <p className="text-2xl font-semibold">Go To Home</p>
                <Link to='/'><button className="h-12 px-8 rounded bg-fuchsia-800 text-white">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;