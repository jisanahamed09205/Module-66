import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
            .then(()=>{})
            .catch(error=>console.log(error));
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>Dashboard</summary>
                <ul className="p-2 lg:bg-opacity-30 backdrop-blur-sm lg:bg-black">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>
        {
            user ? <>
                <span>{user?.displayName}</span>
                <li><button onClick={handleLogOut} className="btn btn-ghost">Logout</button></li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>

    return (
        <>
        {/* backdrop-blur-sm */}
            <div className="navbar 	fixed z-10 bg-opacity-30 bg-black text-white max-w-[1200px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-30 bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;