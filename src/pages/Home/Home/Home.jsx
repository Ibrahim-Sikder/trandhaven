import About from "../AboutSection/About";
import HeroSlider from "../HeroSlider/HeroSlider";
import Shop from "../Shop/Shop";
import Shops from "../Shop/Shops";
import Shops3 from "../Shop/Shops3";
import FreshVegetable from "../Shop/freshVegetable";
import VegetableCategory from "../VegetableCategory/VegetableCategory";
import TrendingTags from "./TrendingTags/TrendingTags";
const Home = () => {
    return (
        <div>
           <HeroSlider/>
           <VegetableCategory/>
           <Shop/>
            <div>
            <Shops3 title="Nature's Bounty, Delivered Fresh I m from shop 3 " />
            </div>
           <FreshVegetable/>
          <div className="my-10">
          <Shops title="Popular Products of TrendHaven!"/>
          </div>
          <TrendingTags/>
          <div>
          <Shops title="Recomended For You!"/>
          </div>
        
          <About/>
        </div>
    );
};

export default Home;