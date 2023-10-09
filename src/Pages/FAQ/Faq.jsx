import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Faq = () => {

    return (

        <div>
            <Helmet>
                <title>Corporate Amusement | FAQ</title>
            </Helmet>
            <div className="bg-gradient-to-r from-blue-200 pt-5 ">

                <NavBar></NavBar>

                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-600 pt-5">Get To Know US</h1>
                    <p className="text-blue-300 my-3"> Discover answers to common questions about our expert services for <br /> unforgettable corporate gatherings.</p>
                </div>

               <div className=" max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto my-8">
               <div className="collapse collapse-arrow bg-indigo-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What services do you offer for corporate events?
                    </div>
                    <div className="collapse-content">
                        <p>We offer a comprehensive range of corporate event management services, including event planning and coordination, venue selection, logistics management, catering, entertainment booking, audiovisual support, and more. Our goal is to handle all aspects of your event to ensure a seamless and successful experience.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  bg-indigo-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do you determine the budget for a corporate event?
                    </div>
                    <div className="collapse-content">
                        <p> Our team works closely with you to establish a realistic budget based on your event goals and requirements. We consider factors such as the number of attendees, event type, location, catering preferences, and any specific requests you have. Our aim is to provide a cost-effective solution that aligns with your vision.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  bg-indigo-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can you help with both small and large corporate events?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we have experience managing events of all sizes, from intimate team meetings to large-scale conferences and product launches. Our flexible approach allows us to tailor our services to the unique needs of your event, regardless of its scale.</p>
                    </div>
                </div>
               </div>

                <Footer></Footer>


            </div>
        </div >


    );
};

export default Faq;