import {  Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { HiOutlineLogin,HiOutlineLocationMarker ,HiOutlineUpload ,HiOutlineUser,HiOutlineHome,HiOutlineShoppingCart  } from "react-icons/hi";
import './Profile.css'
const Profile = () => {
    return (
        <div>
             <Header/>
           <div className="flex  wrapContainer">
            <aside>
               <div className="mt-10">
             <div className="orderItems">
                <HiOutlineHome className="" size={20}/>
                <span className="ml-3">My Account </span>
             </div>
             <div className="orderItems">
                <HiOutlineShoppingCart  size={20}/>
                <span className="ml-3">My Order</span>
             </div>
             <div className="orderItems activeOrderItems">
                <HiOutlineLocationMarker  size={20} />
                <span className="ml-3">Address </span>
             </div>
             <div className="orderItems">
                <HiOutlineUpload  size={20}/>
                <span className="ml-3">  My Wishlist</span>
             </div>
             <div className="orderItems">
                <HiOutlineUser size={20}/>
                <span className="ml-3">My Reviews</span>
             </div>
             <div className="orderItems">
                <HiOutlineUser size={20}/>
                <span className="ml-3">My Returns & Cancellations</span>
             </div>
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