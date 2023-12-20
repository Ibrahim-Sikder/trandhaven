
/* eslint-disable react/no-unescaped-entities */
import './Shop.css'
import { StarBorder } from '@mui/icons-material'
import fruit2 from '../../../../public/assets/vegetable.jpg'
import fruit3 from '../../../../public/assets/vegetable2.png'
import fruit4 from '../../../../public/assets/vegetable3.png'
import fruit5 from '../../../../public/assets/vegetable4.jpg'
import fruit10 from '../../../../public/assets/vegetable5.png'
import { FaEye, FaHeart,FaPlus ,FaMinus  } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { useState } from 'react'

const Shops = () => {
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
			img: fruit5
		}
	]
	return (
		<div className="shopWrap">
			<div>
				<h3 className="text-2xl font-bold mb-8 shopTitle">Nature's Bounty, Delivered Fresh</h3>
				<div className="shopCardsWrap">
					{shopData.map((shop) => (
						<div key={shop.id} className="shopCard">
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
                                                             <p className='ml-2'> 99 Customer review </p>
                                                        
														</div>
                                                        <div className="percentage">
                                                            -50%
                                                        </div>
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
															Lorem ipsum, dolor sit amet consectetur adipisicing elit.
															Nemo, corrupti commodi? Aperiam sapiente nihil
															necessitatibus sequi saepe sed, hic dolores totam enim
															pariatur non iure aspernatur, voluptatem soluta excepturi
															dolor.
														</p>
														<span>Availability: ৫৫৫ <small className='text-[#5800fe]'>in stock </small> </span>
														<div className="increaseDecressBtnWrap">
															<small onClick={decrementOrder}> <FaMinus />  </small>
															<span>  { order}  </span>
															<small onClick={incrementOrder}> <FaPlus/> </small>
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
			</div>
		
	
	
		</div>
	)
}

export default Shops