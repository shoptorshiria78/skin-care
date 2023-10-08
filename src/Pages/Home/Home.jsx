import Animation from "../../Shared/Animation/Animation";
import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Service from "../../Shared/Service/Service";
import Slider from "../../Shared/Slider/Slider";


const Home = () => {
    return (
        <div>
             
             <Banner></Banner>
             <Slider></Slider>
             <Service></Service>
             <Animation></Animation>
             <Footer></Footer>
        </div>
    );
};

export default Home;