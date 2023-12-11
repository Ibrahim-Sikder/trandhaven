/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
import './HeroSlider.css'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import banner from '../../../../public/assets/baner6.jpg'
import banner2 from '../../../../public/assets/banner7.jpg'
import banner3 from '../../../../public/assets/banner8.jpg'
import banner4 from '../../../../public/assets/banner10.jpg'
const AutoplaySlider = withAutoplay(AwesomeSlider);
const HeroSlider = () => {
    return (
        <AutoplaySlider
        className="heroSlider"
    play={true}
    mobileTouch={true}
    interval={3000}
    animation="foldOutAnimation"
  organicArrows={true}
  bullets={true} 
  infinite={true} 
  responsive={true} 

  >
<div>
  <img src="/public/assets/banner3.jpg" alt="slider"  />
  <div className="sliderContent">
    <h3 className='text-3xl font-bold'>"FreshHarvest: Your Farm to Table Connection"</h3>
    <h4>"Discover the Finest Selection of Farm-Fresh Vegetables"</h4>
    <p>"Fresh Picks, Fresh Clicks."</p>
    <button>Shop Now </button>
  </div>
</div>
<div>
  <img src={banner} alt="slider"  />
  <div className="sliderContent">
    <h3 className='text-3xl font-bold'>"FreshHarvest: Your Farm to Table Connection"</h3>
    <h4 className="text-xl font-bold">"Discover the Finest Selection of Farm-Fresh Vegetables"</h4>
    <p className='text-xl'>"Fresh Picks, Fresh Clicks."</p>
    <button>Shop Now </button>
  </div>
</div>
<div>
  <img src={banner2} alt="slider"  />
  <div className="sliderContent">
    <h3 className='text-3xl font-bold'>"FreshHarvest: Your Farm to Table Connection"</h3>
    <h4 className="text-xl font-bold">"Discover the Finest Selection of Farm-Fresh Vegetables"</h4>
    <p className='text-xl'>"Fresh Picks, Fresh Clicks."</p>
    <button>Shop Now </button>
  </div>
</div>
<div>
  <img src={banner3} alt="slider"  />
  <div className="sliderContent">
    <h3 className='text-3xl font-bold'>"FreshHarvest: Your Farm to Table Connection"</h3>
    <h4 className="text-xl font-bold">"Discover the Finest Selection of Farm-Fresh Vegetables"</h4>
    <p className='text-xl'>"Fresh Picks, Fresh Clicks."</p>
    <button>Shop Now </button>
  </div>
</div>
<div>
  <img src={banner4} alt="slider"  />
  <div className="sliderContent">
    <h3 className='text-3xl font-bold'>"FreshHarvest: Your Farm to Table Connection"</h3>
    <h4 className="text-xl font-bold">"Discover the Finest Selection of Farm-Fresh Vegetables"</h4>
    <p className='text-xl'>"Fresh Picks, Fresh Clicks."</p>
    <button>Shop Now </button>
  </div>
</div>
  </AutoplaySlider>
    );
};

export default HeroSlider;