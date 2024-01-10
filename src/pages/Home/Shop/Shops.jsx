/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
import './Shop.css'
import { StarBorder } from '@mui/icons-material'
import fruit2 from '../../../../public/assets/vegetable.jpg'
import fruit3 from '../../../../public/assets/vegetable2.png'
import fruit4 from '../../../../public/assets/vegetable3.png'
import fruit5 from '../../../../public/assets/vegetable4.jpg'
import fruit6 from '../../../../public/assets/vegetable21.jpg'
import fruit7 from '../../../../public/assets/vegetab22.jpg'
import fruit8 from '../../../../public/assets/vegetabe23.jpg'
import fruit9 from '../../../../public/assets/vegetable24.jpg'
import fruit10 from '../../../../public/assets/vegetable25.jpg'
import fruit11 from '../../../../public/assets/vegetable26.jpg'
import fruit12 from '../../../../public/assets/vegetable27.jpg'
import fruit13 from '../../../../public/assets/vegetable28.jpg'
import fruit14 from '../../../../public/assets/vegetable5.png'
import { FaEye, FaHeart,FaPlus ,FaMinus,FaShoppingCart   } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { useState } from 'react'

const Shops = ({title}) => {
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
			img: fruit6
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit7
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit8
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit13
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit14
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit11
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit12
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit9
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit13
		},
		{
			id: 1,
			name: 'Apple',
			desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
			price: 399,
			img: fruit14
		},
	]
	

	return (
		<div className="wrapContainer">
			<div>
				<h3 className="text-4xl text-center md:text-left font-bold mb-8 shopTitle">{title}</h3>
				<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
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
															<span className="text-[#00AB55] ml-2">500G</span>
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
														<span>Availability: ৫৫৫ <small className='text-[#00AB55]'>in stock </small> </span>
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

								<button className="addToCardBtn flex items-center justify-center "> <FaShoppingCart className='mr-2' />  <span>Add to cart</span></button>
							</div>
						</div>
					))}
				</div>
			</div>
		
	
	
		</div>
	)
}

export default Shops
