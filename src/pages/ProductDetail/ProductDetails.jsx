import { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { StarBorder } from '@mui/icons-material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../../public/assets/img.jpg'
import img2 from '../../../public/assets/img2.jpg'
import img3 from '../../../public/assets/img3.jpg'

import './ProductDetails.css'
import { FaMinus, FaPlus } from 'react-icons/fa'
// ... (previous imports)

// ... (previous imports)

const ProductDetails = () => {
	const [ carouselImages ] = useState([ img1, img2, img3 ])

	const mainImageSettings = {
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	const [ order, setOrder ] = useState(0)

	const incrementOrder = () => {
		setOrder(order + 1)
	}
	const decrementOrder = () => {
		if (order < 1) {
			setOrder(0)
		} else {
			setOrder(order - 1)
		}
	}

	return (
		<div className="wrapContainer">
			<div className="productDetailsContainer">
				<div className="productDetailsLeftSide">
					<Slider {...mainImageSettings}>
						{carouselImages.map((image, index) => (
							<ReactImageMagnify
								key={index}
								{...{
									smallImage: {
										alt: 'vegetable',
										isFluidWidth: true,
										src: image
									},
									largeImage: {
										src: image,
										width: 900,
										height: 1000
									},
									enlargedImageContainerClassName: 'enlargedImageContainer',
									enlargedImageClassName: 'enlargedImage',
									isHintEnabled: true,
									shouldHideHintAfterFirstActivation: false,
									enlargedImagePosition: 'over',
									fadeDurationInMs: 100
								}}
							/>
						))}
					</Slider>
				</div>
				<div className="productDetailMiddleSide ">
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
					<div>
						<span className="text-xl">
							{' '}
							BDT <del>$350.00</del> <b className="text-[#00AB55]">$300.00</b>
						</span>
					</div>
					<p className="my-3 text-xl">
						Apple Inc. stands as a global technology powerhouse, renowned for revolutionizing the landscape
						of consumer electronics and information technology. Founded in 1976 by Steve Jobs, Steve
						Wozniak,
					</p>
					<div className="flex items-center my-3 ">
            <b className='mr-3 '>Quantity: </b>
            <div className="increaseDecressBtnWrap">
						<small onClick={decrementOrder}>
							{' '}
							<FaMinus />{' '}
						</small>
						<span> {order} </span>
						<small onClick={incrementOrder}>
							{' '}
							<FaPlus />{' '}
						</small>
					</div>
          </div>
					<div>
						<div className="flex items-center">
							<div className="remainingTime">
								<span>05</span>
								<p>Day</p>
							</div>
							<div className="remainingTime">
								<span>05</span>
								<p>Hours</p>
							</div>
							<div className="remainingTime">
								<span>05</span>
								<p>Minute </p>
							</div>
							<div className="remainingTime">
								<span>05</span>
								<p>Second</p>
							</div>
						</div>
						<div className="my-3">
							<span>
								Availablity: <b>50 in-stock</b>
							</span>
						</div>
						<button className="detailAddTopCartBtn">Add To Cart </button>
					</div>
				</div>
			</div>
			<div className="relatedProduct">
				<h3 className="text-2xl font-bold">Related Products </h3>
			</div>
		</div>
	)
}

export default ProductDetails
