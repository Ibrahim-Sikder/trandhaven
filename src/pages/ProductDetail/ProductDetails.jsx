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
import { FaMinus, FaPlus, FaUserAlt } from 'react-icons/fa'
import Shops from '../Home/Shop/Shops'
import ProgressBar from '@ramonak/react-progress-bar'
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
										width: 600,
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
						<b className="mr-3 ">Quantity: </b>
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
			<div className="productDescriptions my-10 ">
				<h3 className="text-5xl font-bold"> Products Descriptions </h3>
				<p className="mt-3">
					{' '}
					<b>Rich in Nutrients:</b> Vegetables are packed with essential vitamins and minerals such as vitamin
					C, vitamin A, potassium, folate, and more. These nutrients play crucial roles in maintaining various
					bodily functions. Many vegetables are high in dietary fiber, which is important for digestive
					health. Fiber helps regulate bowel movements, prevents constipation, and supports a healthy gut
					microbiome.
				</p>
				<p>
					<b>Low in Calories:</b> Most vegetables are low in calories, making them an excellent choice for
					those looking to manage their weight. They provide volume and satiety without contributing excessive
					calories.Most vegetables are low in calories, making them an excellent choice for those looking to
					manage their weight. They provide volume and satiety without contributing excessive calories.
				</p>
				<p>
					{' '}
					<b>Antioxidant Properties:</b> Vegetables are rich in antioxidants, which help neutralize harmful
					free radicals in the body. Antioxidants are associated with a reduced risk of chronic diseases and
					may contribute to overall health.
				</p>
				<p>
					{' '}
					<b>Heart Health:</b> Some vegetables, such as leafy greens and cruciferous vegetables, have been
					linked to heart health. They may help lower blood pressure, reduce cholesterol levels, and support
					cardiovascular well-being.
				</p>
				<p>
					<b> Bone Health:</b> Certain vegetables, including dark leafy greens, are good sources of calcium
					and vitamin K, which are important for maintaining strong and healthy bones.
				</p>
			</div>
			<div className="customerReviews mb-5">
				<h3 className="text-4xl font-bold">Products Reivews: </h3>
			</div>
			<div className="relatedProduct">
				<h3 className="text-4xl font-bold">Related Products: </h3>
				<div>
					<h3 className="text-xl my-3 "> 20 Reivew for Beef Club & T-Bone Per Product</h3>
					<div className="flex items-center mt-5">
						<div className="flex items-center mr-5">
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
						</div>
						<ProgressBar completed={95} maxCompleted={100} className="progressBar" />
						<b className="ml-5">5</b>
					</div>
					<div className="flex items-center my-5">
						<div className="flex items-center mr-5">
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
						</div>
						<ProgressBar completed={80} maxCompleted={100} className="progressBar" />
						<b className="ml-5">5</b>
					</div>
					<div className="flex items-center my-5">
						<div className="flex items-center mr-5">
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
						</div>
						<ProgressBar completed={50} maxCompleted={100} className="progressBar" />
						<b className="ml-5">8</b>
					</div>
					<div className="flex items-center my-5">
						<div className="flex items-center mr-5">
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
						</div>
						<ProgressBar completed={80} maxCompleted={100} className="progressBar" />
						<b className="ml-5">4</b>
					</div>
					<div className="flex items-center my-5">
						<div className="flex items-center mr-5">
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
							<StarBorder className="reviewStar" />
						</div>
						<ProgressBar completed={90} maxCompleted={100} className="progressBar" />
						<b className="ml-5">9</b>
					</div>
				</div>
				<div className="customerComent my-10 ">
					<div className="commentWrap flex ">
						<div className="reviewMan">
							<FaUserAlt className="customerReviewIcon" />
						</div>
						<div>
							<h3 className="text-xl">Ibrahim Sikder</h3>
							<div className="flex items-center my-2">
								<span>
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
								</span>
							</div>
							<div>
                <span>United States From</span>
                <small className="text-[#C4C4C4]"> December 01, 2023 </small>
              </div>
							<p>
								Excellent source of beta-carotene, promoting eye health ! <br /> Good for snacking or
								adding to salads and stir-fries.
							</p>
						</div>
					</div>
          <div className="commentWrap flex ">
						<div className="reviewMan">
							<FaUserAlt className="customerReviewIcon" />
						</div>
						<div>
							<h3 className="text-xl">Ibrahim Sikder</h3>
							<div className="flex items-center my-2">
								<span>
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
									<StarBorder className="shopReviewIcon" />
								</span>
							</div>
							<div>
                <span>United States From</span>
                <small className="text-[#C4C4C4]"> December 01, 2023 </small>
              </div>
							<p>
								Excellent source of beta-carotene, promoting eye health ! <br /> Good for snacking or
								adding to salads and stir-fries.
							</p>
						</div>
					</div>
				</div>
        <div className="addReview">
          <h3 className="text-xl">Give Review</h3>
          <form>
           <div className="giveReview">
           <label>Name </label>
            <input type="text" placeholder='Name' />
           </div>
           <div className="giveReview">
           <label>Email </label>
            <input type="text" placeholder='Email' />
           </div>
           <div className="giveReview">
           <label>Your Review </label>
            <textarea> </textarea>
           </div>
          </form>
        </div>
				<div className="mt-5">
					<Shops />
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
