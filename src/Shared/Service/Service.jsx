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
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto mt-12 mb-12 pb-12">
            
            { 
                 cards.map(card=><Card key={card.id} card={card}></Card>)
            }
    
            </div>
       </div>
    );
};

export default Service;