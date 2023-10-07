import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const Nav = <div className=" space-x-3 text-base">
        <NavLink to='/' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>Home</NavLink>
        <NavLink to='/team' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>Team</NavLink >
        <NavLink to='/faq' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>FAQ</NavLink >
        <NavLink to='/blogs' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>Blogs</NavLink >
        <NavLink to='/myOrder' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>My Order</NavLink >
        <NavLink to='/contact' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>Contact Us</NavLink>
    </div>

    return (
        <div className="navbar mt-5 sticky rounded-xl px-12 bg-[#E5547324] max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Nav
                        }
                    </ul>
                </div>
                <div>
                    <div className="text-3xl font-bold text-[#E55473]">corporate</div>
                    <div className="text-xl "><span className="text-2xl font-bold ">A</span>musement</div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Nav
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'
                 className=" bg-[#E55473] text-white px-4 py-1 rounded">Log In</Link
                >
            </div>
        </div>
    );
};

export default NavBar;