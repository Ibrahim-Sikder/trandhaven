/* eslint-disable no-mixed-spaces-and-tabs */
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import { useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { HiArrowNarrowUp } from "react-icons/hi";

const Main = () => {

    useEffect(() => {
		const handleScroll = () => {
		  const button = document.getElementById('button')
		 if(window.scrollY > 200){
		   button.classList.add('scrollToTopBtn')
		  }
		  else{
		  button.classList.remove('scrollToTopBtn')
		 }
	
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	  }, []);
	
	function scrollToTop(){
	  window.scrollTo(0,0)
	  scroll.scrollToTop({ smooth: true });
	}


    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            <button onClick={scrollToTop} id="button"><HiArrowNarrowUp size={25} /> </button>
	
        </div>
    );
};

export default Main;