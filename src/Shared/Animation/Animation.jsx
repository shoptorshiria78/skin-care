
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Animation = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div>
             <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-600 pt-10">Our Product Expos</h1>
                <p className="text-orange-300 my-3">Turning Dreams into Memorable Events: <br /> Your Event, Our Expertise.</p>
            </div>
            <div className='grid grid-rows-4 gap-8 justify-center pt-20 pb-20'>

                <div data-aos='fade-left'><img className="w-80 h-80" src="https://i.ibb.co/hYpjHJW/product-launch.jpg" alt="" /></div>
                <div className="item" data-aos='fade-right'><img className="w-80 h-80" src="https://i.ibb.co/wWD4DZw/product-pic-1.jpg" alt="" /></div>
                <div className="item" data-aos='fade-left'><img className="w-80 h-80" src="https://i.ibb.co/GHFm8r6/product-pic-2.jpg" alt="" /></div>
                <div className="item" data-aos='fade-right'><img className="w-80 h-80" src="https://i.ibb.co/3vNwd39/product-pic-3.jpg" alt="" /></div>

            </div>
        </div>
    );
};

export default Animation;