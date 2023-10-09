import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import swal from 'sweetalert'
import Footer from "../../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {

    const params = useParams();
    const cards = useLoaderData();
    console.log(cards)

    const [card, setCard] = useState({})


    useEffect(() => {
        const findCard = cards.find(card => card.id === JSON.parse(params.id));
        console.log(findCard);
        setCard(findCard);
    }, [cards, params])

    const handleOrder = () => {


        const myOrder = [];

        const orderedItems = JSON.parse(localStorage.getItem('order'));
        if (!orderedItems) {
            myOrder.push(card);
            localStorage.setItem('order', JSON.stringify(myOrder));
            swal("Good job!", "You have ordered!", "success");
        }
        else {

            const isExists = orderedItems.find(item => item.id === card.id)

            if (!isExists) {
                myOrder.push(...orderedItems, card);
                localStorage.setItem('order', JSON.stringify(myOrder));
                swal("Good job!", "You have ordered!", "success");
            }
            else {
                swal("Error", "Already ordered", "error");
            }

        }

    }


    return (

        <div className="bg-[#ddf1e1] px-3 py-3 ">
            <Helmet>
                <title>Corporate Amusement | ServiceDetails page</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto my-10 ">
                
                    <div><img className="w-full h-[80vh] mb-10" src={card.img} alt="" /></div>
                    <h1 className="text-4xl font-extrabold">{card.title}</h1>
                    <p className="mt-5 text-[#46454599]">{card.description}</p>

                    <p className="text-[#43a056] font-bold mt-5 text-lg"> Price: {card.price} $</p>

                    <button onClick={handleOrder} className="px-6 py-3 rounded bg-[#43a056] text-white my-5"><Link to='/myOrder'>Buy Now</Link></button>

                
            </div>
            <Footer></Footer>
        </div>

    );
};

export default ServiceDetails;