import './HeroSlider.css'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const HeroSlider = () => {
    return (
        <AutoplaySlider
        className="heroSlider"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={20000000}
  >

    <div data-src="/public/assets/banner3.jpg" />
    <div data-src="/public/assets/banner4.jpg" />
    <div data-src="/public/assets/banner5.jpg" />
    <div data-src="/public/assets/banner10.jpg" />
    <div data-src="/public/assets/banner7.jpg" />
  </AutoplaySlider>
    );
};

export default HeroSlider;