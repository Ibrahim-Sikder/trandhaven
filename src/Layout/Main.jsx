import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header/>
           <div className="wrapContainer">
           <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default Main;