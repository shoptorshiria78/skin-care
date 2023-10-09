import Member from "../../Component/Card/Member/Member";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";


const Team = () => {

    const team =[
       {
        id:1,
        name:"William smith",
        pic:'https://i.ibb.co/q1mt484/team-1.jpg',
        post:'Event Planner or Event Coordinator'
       },
       {
        id:2,
        name:"Emily Davis",
        pic:'https://i.ibb.co/4jMXmn0/team-2.jpg',
        post:'Production Manager'
       },
       {
        id:3,
        name:"James Smith",
        pic:'https://i.ibb.co/JzKHkbz/team-4.jpg',
        post:'Registration Manager'
       },
       {
        id:4,
        name:'Sophia loren',
        pic:'https://i.ibb.co/ZgtQc5n/team-3.jpg',
        post:'Marketing  Specialist'

       }

    ]
   
    return (
       <div className="relative">
         <div className=" bg-cover bg-no-repeat h-[450vh] md:h-[270vh] lg:h-[200vh] " style={{ backgroundImage: 'url(https://i.ibb.co/qsDn0pr/team-bg.jpg)' }}>
        <div className="hero-overlay bg-opacity-80"></div>
            
            <div className=" absolute left-8 md:left-24 top-44 lg:left-96">
                <h1 className="text-4xl  text-center font-bold text-[#E55473]"> OUR TEAM</h1>
            <h1 className="text-xl text-center text-red-300 my-5 "> Crafting Unforgettable Corporate Experiences 
                Elevate Your <br /> Business   Events with Our Expertise!</h1>
            </div>
            <div className="max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 absolute left-8 md:left-2 top-56 lg:left-56">
                {
                    team.map(member=> <Member member={member} key={member.key}></Member>)
                }
            </div>
           
            <div className="absolute top-3  w-full">
           <NavBar></NavBar>
           </div>


        </div>
         <Footer></Footer>
       </div>
    );
};

export default Team;