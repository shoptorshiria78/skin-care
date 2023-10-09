import { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Blog from "../../Component/Blog/Blog";
import { Helmet } from "react-helmet-async";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div className="bg-gradient-to-r pt-10 from-purple-100">
            <Helmet>
                <title>Corporate Amusement | News & Blog</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-purple-600 pt-10">Our Portal</h1>
                    <p className="text-purple-300 my-3">Transforming Ideas into Memorable Events: Crafting <br /> Extraordinary Experiences with Passion.</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[400px] md:max-w-[750px] lg:max-w-[1100px] mx-auto mt-12 pb-12">

                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;