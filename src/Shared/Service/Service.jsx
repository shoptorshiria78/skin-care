import { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";


const Service = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])
    return (
        <div className="bg-[#e9f2f2]">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 pt-10">Our Services</h1>
                <p className="text-blue-300 my-3">Unlock the Power of Exceptional Events Your Vision, <br/>
                Our Expertise - Unleash Success!</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto mt-12 pb-12">

                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
        </div>
    );
};

export default Service;