import About from "../AboutSection/About";
import HeroSlider from "../HeroSlider/HeroSlider";
import Shop from "../Shop/Shop";
import Shops from "../Shop/Shops";
import VegetableCategory from "../VegetableCategory/VegetableCategory";
const Home = () => {
    return (
        <div>
           <HeroSlider/>
           <VegetableCategory/>
           {/* <About/> */}
           <Shop/>
          <div className="my-10">
          <Shops title="Popular Products of TrendHaven!"/>
          </div>
          <div>
          <Shops title="Recomended For You!"/>
          </div>
          <About/>
        </div>
    );
};

export default Home;