import fresh from '../../../../public/assets/fresh.jpg'
import apple from '../../../../public/assets/apple.jpg'
import apple2 from '../../../../public/assets/apple2.jpg'
import { HiStar } from 'react-icons/hi'
import './Shop.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
const FreshVegetable = () => {
	return (
		<div className=" bg-[#F4F6F8] p-14 mt-[80px] ">
			<div className="bg-[#fff] py-10 px-8 wrapContainer">
				<h3 className="  text-4xl  font-bold mb-5 ">Fresh Vegetables </h3>
				<div className=" fresVegetableCategory  ">
					<div className="freshVegetableLeft">
						<img loading="lazy" className="w-[500px]" src={fresh} alt="fresh " />
					</div>
					<div className="freshVegetableRight ">
						<Swiper rewind={true} navigation={true} modules={[ Navigation ]} className="mySwiper">
							<SwiperSlide>
								<div>
									<div className="flex items-center justify-between">
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div>
									<div className="flex items-center justify-between">
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
									</div>
									<div className="flex items-center justify-between my-8">
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div>
									<div className="flex items-center justify-between">
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple2}
														alt="apple"
													/>
												</div>
												<div className="percent">25%</div>
												<span className="featureFress">Feature</span>
											</div>
											<div>
												<button>Fusion Foods </button>
												<span className="my-2 block">Zest Oranges </span>
												<small>450g</small>
												<div className="flex items-center my-2">
													<HiStar />
													<HiStar />
													<HiStar />
													<HiStar />
												</div>
												<span className="text-[#C55C79] font-bold ">$89.00 - $100.00</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FreshVegetable
