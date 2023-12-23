import About from "../AboutSection/About";
import HeroSlider from "../HeroSlider/HeroSlider";
import Shop from "../Shop/Shop";
import VegetableCategory from "../VegetableCategory/VegetableCategory";

const Home = () => {
    return (
        <div>
           <HeroSlider/>
           <VegetableCategory/>
           <About/>
           <Shop/>
        </div>
    );
};

export default Home;