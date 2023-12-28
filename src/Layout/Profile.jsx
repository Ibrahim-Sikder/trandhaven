import {  Link, Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { HiOutlineLogin,HiOutlineLocationMarker ,HiOutlineUpload ,HiOutlineUser,HiOutlineHome,HiOutlineShoppingCart  } from "react-icons/hi";
import './Profile.css'
const Profile = () => {
    return (
        <div>
             <Header/>
           <div className="flex justify-between  wrapContainer">
            <aside>
               <div className="mt-10">
           <Link to='/my-account'>   
           <div className="orderItems">
                <HiOutlineHome className="" size={20}/>
                <span className="ml-3">My Account </span>
             </div>
           </Link>
           
            <Link to='/my-account/order'>
            <div className="orderItems">
                <HiOutlineShoppingCart  size={20}/>
                <span className="ml-3">My Order</span>
             </div>
            </Link>
            <Link to='/my-account/address'>
            <div className="orderItems activeOrderItems">
                <HiOutlineLocationMarker  size={20} />
                <span className="ml-3">Address </span>
             </div>
            </Link>
             <div className="orderItems">
                <HiOutlineUpload  size={20}/>
                <span className="ml-3">  My Wishlist</span>
             </div>
             <div className="orderItems">
                <HiOutlineUser size={20}/>
                <span className="ml-3">My Reviews</span>
             </div>
           <Link to='/my-account/cancel'>
           <div className="orderItems">
                <HiOutlineUser size={20}/>
                <span className="ml-3">My Returns & Cancellations</span>
             </div>
           </Link>
             <div className="orderItems">
                <HiOutlineLogin size={20}/>
                <span className="ml-3">Log Out </span>
             </div>
               </div>
            </aside>





            <Outlet/>

           </div>
            <Footer/>
        </div>
    );
};

export default Profile