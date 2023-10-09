import NavBar from "../NavBar/NavBar";


const Banner = () => {
    return (
        <div className="relative ">
           
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/9tmfFnx/banner-pic-background.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 mt-32 md:mt-20 text-5xl font-bold text-red-300">Elevate Corporate Experiences</h1>
                        
                        <p className="mb-5 text-red-400">Elevate Your Corporate Events with Our Expertise. Crafting Memorable Experiences. Your Success, Our Commitment. Welcome to Event Excellence!</p>
                        <button className="px-4 py-2 bg-red-700 text-white rounded">Get Started</button>
                    </div>
                </div>
            </div>
            
           
           <div className="absolute top-3  w-full">
           <NavBar></NavBar>
           </div>
           
            
        </div>
    );
};

export default Banner;