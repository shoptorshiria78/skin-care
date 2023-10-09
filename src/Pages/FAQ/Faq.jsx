import NavBar from "../../Shared/NavBar/NavBar";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Footer from "../../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Faq = () => {

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="bg-gradient-to-r from-blue-200 pt-10">
            <Helmet>
                <title>Corporate Amusement | FAQ</title>
            </Helmet>
            <NavBar></NavBar>

            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 pt-10">Get To Know US</h1>
                <p className="text-blue-300 my-3"> Discover answers to common questions about our expert services for <br /> unforgettable corporate gatherings.</p>
            </div>

            <div className="max-w-[400px] md:max-w-[750px] lg:max-w-[900px] mx-auto my-20">
                <Accordion open={open === 1} className=" mb-2 rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                       What services do you offer for corporate events?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                    We offer a comprehensive range of corporate event management services, including event planning and coordination, venue selection, logistics management, catering, entertainment booking, audiovisual support, and more. Our goal is to handle all aspects of your event to ensure a seamless and successful experience.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        How do you determine the budget for a corporate event?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                    Our team works closely with you to establish a realistic budget based on your event goals and requirements. We consider factors such as the number of attendees, event type, location, catering preferences, and any specific requests you have. Our aim is to provide a cost-effective solution that aligns with your vision.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                       Can you help with both small and large corporate events?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                    Yes, we have experience managing events of all sizes, from intimate team meetings to large-scale conferences and product launches. Our flexible approach allows us to tailor our services to the unique needs of your event, regardless of its scale.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} className="rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(4)}
                        className={`border-b-0 transition-colors ${open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        How do you handle unexpected issues or emergencies during an event?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                    We have a dedicated team of experienced event managers who are skilled in problem-solving and crisis management. We also have contingency plans in place to address unforeseen issues. Our priority is to ensure that your event runs smoothly, and we will take swift action to resolve any challenges that may arise.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} className="rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(5)}
                        className={`border-b-0 transition-colors ${open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                       Can you provide references or examples of past corporate events you have managed?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                    Absolutely, we can provide references and share case studies of past corporate events we have successfully managed. We believe in transparency and are proud of our track record of delivering exceptional events. Feel free to ask for specific examples that align with your event goals and vision.
                    </AccordionBody>
                </Accordion>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default Faq;