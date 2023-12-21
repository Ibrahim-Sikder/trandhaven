import  { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { StarBorder } from '@mui/icons-material';
import Slider from 'react-slick'; // Import react-slick carousel library
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../../public/assets/img.jpg';
import img2 from '../../../public/assets/img2.jpg';
import img3 from '../../../public/assets/img3.jpg';

import './ProductDetails.css';
// ... (previous imports)

// ... (previous imports)

const ProductDetails = () => {
    const [carouselImages] = useState([img1, img2, img3]);
  
    const mainImageSettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    const carouselSettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Adjust the number of images shown in the carousel
      slidesToScroll: 1,
    };
  
    return (
      <div className="wrapContainer">
        <div className="productDetailsContainer">
          <div className="productDetailsLeftSide">
            <div className="mb-5">
              <div className="flex items-center mb-3">
                <h3 className="text-3xl font-bold mr-2">Beef Club & T-Bone Per kg</h3>
                <p>500g</p>
              </div>
              <div className="flex items-center">
                <div>
                  <StarBorder className="shopReviewIcon" />
                  <StarBorder className="shopReviewIcon" />
                  <StarBorder className="shopReviewIcon" />
                  <StarBorder className="shopReviewIcon" />
                  <StarBorder className="shopReviewIcon" />
                </div>
                <span className="ml-2 text-[#637791]">300 Customer reviews | 50 sold</span>
              </div>
            </div>
            <Slider {...mainImageSettings}>
              {carouselImages.map((image, index) => (
                <ReactImageMagnify
                  key={index}
                  {...{
                    smallImage: {
                      alt: 'vegetable',
                      isFluidWidth: true,
                      src: image,
                    },
                    largeImage: {
                      src: image,
                      width: 500,
                      height: 700,
                    },
                    enlargedImageContainerClassName: 'enlargedImageContainer',
                    enlargedImageClassName: 'enlargedImage',
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: false,
                    enlargedImagePosition: 'over',
                    fadeDurationInMs: 100,
                  }}
                />
              ))}
            </Slider>
          </div>
          <div className="productDetailMiddleSide">
            {/* Add the second slider for the carousel below the main image */}
            <Slider {...carouselSettings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-image-box">
                  <img src={image} alt={`carousel-${index}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="productDetailsRightSide">
            <div>
              <del>$350.00</del> <b>$300.00</b>
            </div>
            <p>
              Apple Inc. stands as a global technology powerhouse, renowned for revolutionizing the landscape of consumer electronics and information technology. Founded in 1976 by Steve Jobs, Steve Wozniak,
            </p>
            <div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  