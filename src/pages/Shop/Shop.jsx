import './Shop.css'
import MultiRangeSlider from 'multi-range-slider-react'
import fruit from '../../../public/assets/fruit13.jpg'
import fruit2 from '../../../public/assets/vegetable.jpg'
import fruit3 from '../../../public/assets/vegetable2.png'
import fruit4 from '../../../public/assets/vegetable3.png'
import fruit5 from '../../../public/assets/vegetable4.jpg'
import fruit10 from '../../../public/assets/vegetable5.png'
import img from '../../../public/assets/img.jpg'
import img2 from '../../../public/assets/img2.jpg'
import img3 from '../../../public/assets/img.jpg'
import img4 from '../../../public/assets/img3.jpg'
import img5 from '../../../public/assets/img4.jpg'
import img6 from '../../../public/assets/img5.jpg'
import img7 from '../../../public/assets/img6.jpg'
import img8 from '../../../public/assets/img7.jpg'
import img9 from '../../../public/assets/img8.jpg'
import img10 from '../../../public/assets/img9.png'
import img11 from '../../../public/assets/img.jpg'
import img12 from '../../../public/assets/img.jpg'

import { StarBorder } from '@mui/icons-material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FaEye, FaHeart, FaPlus, FaMinus,FaAngleLeft ,FaAngleRight  } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { useState } from 'react'
const Shop = () => {
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

	const shopData = [
		
        {
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit2
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit3
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit4
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img5
		},
        {
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img4
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img3
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img2
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img
		},
        {
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img6
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img7
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img8
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img9
		},
        {
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img10
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img11
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: img12
		},
	]
	return (
		<div>
			<div className="wrapContainer">
				<div className="shopContainer">
					<div className="shopContainerLeftSide">
						<div className="productCategories ">
							<h3 className="text-4xl font-bold">Shop</h3>
							<h4 className="mt-3 "> Product categories </h4>
							<ul>
								<li>Dairy & Eggs</li>
								<li>Fish & Seafood </li>
								<li>Fruit </li>
								<li>Meat & Poultry </li>
								<li>Milk & Drinks </li>
								<li>Vegetables </li>
							</ul>
						</div>
						<hr />
						<h3 className="text-xl font-bold">Price </h3>
						<div className="priceRange">
							<div className="rang">
								<MultiRangeSlider />
							</div>
							<p>
								Price: <b>$50 - $70 </b>
							</p>

							<button className="filterBtn mt-3 ">Filter</button>
						</div>
						<hr className="my-8" />
						<div className="productTags">
							<h3 className="text-2xl font-bold">Product Tags </h3>
							<div className="productTagButtonGroup">
								<div className="flex items-center">
									<button className="productTagBtn">Banana</button>
									<button className="productTagBtn">Egg</button>
								</div>
								<div>
									<button className="productTagBtn">Vegetable</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Apple</button>
									<button className="productTagBtn">Orange </button>
									<button className="productTagBtn">Mangoes </button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Chicken</button>
									<button className="productTagBtn">Frozen Chicken</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Organic </button>
									<button className="productTagBtn">Onion</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Fresh milk</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
									<button className="productTagBtn">Tomato</button>
									<button className="productTagBtn">Banana</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
								</div>
							</div>
						</div>

						<hr className="my-8" />
						<div className="color">
							<ul>
								<li>Geen (4)</li>
								<li>Crimson (4)</li>
								<li>Light Green (9)</li>
								<li>Yellow (3)</li>
								<li>Yellow (3)</li>
							</ul>
						</div>
						<hr className="my-8" />
						<div className="product">
							<div className=" flex items-center   ">
								<img className="w-[80px]" src={fruit} alt="fruit" />
								<div className=" ml-8">
									<div>Zesco Ripe Bananas </div>
									<div>
										<div>
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
										</div>
										<b>$199.00</b>
									</div>
								</div>
							</div>
							<div className=" flex items-center my-3  ">
								<img className="w-[80px]" src={fruit2} alt="fruit" />
								<div className=" ml-8">
									<div>Zesco Ripe Bananas </div>
									<div>
										<div>
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
										</div>
										<b>$199.00</b>
									</div>
								</div>
							</div>
							<div className=" flex items-center   ">
								<img className="w-[80px]" src={fruit3} alt="fruit" />
								<div className=" ml-8">
									<div>Zesco Ripe Bananas </div>
									<div>
										<div>
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
											<StarBorder className="shopReviewIcon" />
										</div>
										<b>$199.00</b>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="shopContainerRightSide">
                       
                           <div className="flex items-center justify-between my-8 px-5">
                           <h3 className="text-xl">Showing 150 Products </h3>
                            <div>
                            <FormControl className="sortProduct">
							<InputLabel htmlFor="grouped-native-select">Sort By Product  </InputLabel>
							<Select native defaultValue="" id="grouped-native-select" label="Select Category ">
								<option value="Default Soring "> Default Soring </option>
								<option aria-label="None" value="" />
								<option value="Sort By Popularity "> Sort By Popularity </option>
								<option value="Sort By Latest Product "> Sort By Latest Product </option>
								<option value="Sort By Price Low to High "> Sort By Price Low to High </option>
								<option value="Sort By Average Rating "> Sort By Average Rating </option>
							</Select>
						</FormControl>
                            </div>
                           </div>
                     

						<div className="containerShopCard">
							{shopData.map((shop) => (
								<div key={shop.id} className="shopCard shopCard2">
									<div className="imgWrap">
										<img src={shop.img} alt="" />
										<div className="quickView">
											<div className="iconText">
												<FaHeart className="shopIcon" />
												<small>Whishlist</small>
											</div>
											<div className="iconText">
												<FaEye
													onClick={() => document.getElementById('my_modal_3').showModal()}
													className="shopIcon"
												/>
												<small>Quickview</small>
											</div>
											<dialog id="my_modal_3" className="modal">
												<div className="modal-box shopModal">
													<form method="dialog">
														<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
															✕
														</button>
														<div className="flex items-center justify-between relative">
															<div>
																<div className="flex">
																	<h3 className="text-2xl font-bold">Orange Peel </h3>
																	<span className="text-[#5800fe] ml-2">500G</span>
																</div>
																<div className="flex items-center my-2">
																	<span>
																		<StarBorder className="shopReviewIcon" />
																		<StarBorder className="shopReviewIcon" />
																		<StarBorder className="shopReviewIcon" />
																		<StarBorder className="shopReviewIcon" />
																		<StarBorder className="shopReviewIcon" />
																	</span>
																	<p className="ml-2"> 99 Customer review </p>
																</div>
																<div className="percentage">-50%</div>
																<div className="mt-8">
																	<Swiper
																		className="shopSlider"
																		pagination={{
																			type: ''
																		}}
																		navigation={true}
																		modules={[ Pagination, Navigation ]}
																	>
																		<SwiperSlide className="">
																			<img src={fruit2} alt="category" />
																		</SwiperSlide>
																		<SwiperSlide className="">
																			<img src={fruit3} alt="category" />
																		</SwiperSlide>
																		<SwiperSlide className="">
																			<img src={fruit4} alt="category" />
																		</SwiperSlide>
																		<SwiperSlide className="">
																			<img src={fruit5} alt="category" />
																		</SwiperSlide>
																		<SwiperSlide className="">
																			<img src={fruit10} alt="category" />
																		</SwiperSlide>
																	</Swiper>
																</div>
															</div>
															<div className="modalRightSide ml-8">
																<span>BDT</span>
																<del className="mx-2">৳১৫0.00</del>
																<b>৳৯৯.00</b>
																<p className="lead my-3">
																	Lorem ipsum, dolor sit amet consectetur adipisicing
																	elit. Nemo, corrupti commodi? Aperiam sapiente nihil
																	necessitatibus sequi saepe sed, hic dolores totam
																	enim pariatur non iure aspernatur, voluptatem soluta
																	excepturi dolor.
																</p>
																<span>
																	Availability: ৫৫৫{' '}
																	<small className="text-[#5800fe]">in stock </small>{' '}
																</span>
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
																<button className="orderBtn">Add To Cart </button>
															</div>
														</div>
													</form>
												</div>
											</dialog>
										</div>
									</div>
									<div className="shopContent">
										<h3 className="text-2xl font-bold">{shop.name}</h3>
										<p className="my-1">{shop.desc} </p>
										<div>
											<StarBorder className="reviewIcon" />
											<StarBorder className="reviewIcon" />
											<StarBorder className="reviewIcon" />
											<StarBorder className="reviewIcon" />
											<StarBorder className="reviewIcon" />
										</div>
										<span className="block my-2">
											BDT <b>{shop.price}৳</b>
										</span>

										<button className="addToCardBtn">Add to cart</button>
									</div>
								</div>
							))}
						</div>
                        <div className="pagination">
                            <span><FaAngleLeft className='arrowLeft' /></span>
                            <span>1</span>
                            <span>2</span>
                            <span className='activePagination'>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span><FaAngleRight className='arrowRight' /></span>

                        </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shop
