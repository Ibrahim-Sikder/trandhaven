import { Link, Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Profile = () => {
    return (
        <div>
             <Header/>
           <div className="flex justify-between wrapContainer ">
            <aside>
                <h3>dashboard</h3>
                <Link to='/my-account'>Dashboard</Link>
                <Link to='/my-account/order'>Order</Link>
            </aside>
            <Outlet/>

           </div>
            <Footer/>
        </div>
    );
};

export default Profile