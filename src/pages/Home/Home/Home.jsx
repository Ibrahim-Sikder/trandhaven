import About from "../AboutSection/About";
import HeroSlider from "../HeroSlider/HeroSlider";
import Shop from "../Shop/Shop";

const Home = () => {
    return (
        <div>
           <HeroSlider/>
           <About/>
           <Shop/>
        </div>
    );
};

export default Home;