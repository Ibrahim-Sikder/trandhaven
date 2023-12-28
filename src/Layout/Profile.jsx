import {  Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { HiOutlineLogin,HiOutlineLocationMarker ,HiOutlineUpload ,HiOutlineUser,HiOutlineHome,HiOutlineShoppingCart  } from "react-icons/hi";
import './Profile.css'
const Profile = () => {
    return (
        <div>
             <Header/>
           <div className="flex justify-between wrapContainer">
            <aside>
               <div className="mt-10">
             <div className="orderItems">
                <HiOutlineHome className="" size={20}/>
                <span className="ml-3">My Account </span>
             </div>
             <div className="orderItems">
                <HiOutlineShoppingCart  size={20}/>
                <span className="ml-3">Order</span>
             </div>
             <div className="orderItems activeOrderItems">
                <HiOutlineLocationMarker  size={20} />
                <span className="ml-3">Address </span>
             </div>
             <div className="orderItems">
                <HiOutlineUpload  size={20}/>
                <span className="ml-3">Download</span>
             </div>
             <div className="orderItems">
                <HiOutlineUser size={20}/>
                <span className="ml-3">Account Details </span>
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