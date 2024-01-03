import fresh from '../../../../public/assets/fresh.jpg'
import apple from '../../../../public/assets/apple.jpg'
import apple2 from '../../../../public/assets/apple2.jpg'
import apple3 from '../../../../public/assets/apple3.jpg'
import apple4 from '../../../../public/assets/apple4.jpg'
import apple5 from '../../../../public/assets/apple5.jpg'
import apple6 from '../../../../public/assets/apple6.jpg'
import apple7 from '../../../../public/assets/apple7.jpg'
import apple8 from '../../../../public/assets/apple8.jpg'
import apple9 from '../../../../public/assets/apple9.jpg'
import apple10 from '../../../../public/assets/apple10.jpg'
import { HiStar } from 'react-icons/hi'
import './Shop.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
const FreshVegetable = () => {
	return (
		<div className=" bg-[#F4F6F8] p-14 mt-[80px] ">
			<div className="bg-[#fff] pt-5 pb- px-8 wrapContainer">
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
										<Link to='/detail'>
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
										</Link>
										<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple3}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple4}
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
										</Link>
									</div>
									<div className="flex items-center justify-between">
									<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple5}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple6}
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
										</Link>

										<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple7}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple8}
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
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div>
									<div className="flex items-center justify-between">
									<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple9}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple10}
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
										</Link>
										<Link to='/detail'>
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
										</Link>
										
									</div>
									<div className="flex items-center justify-between my-8">
									<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple3}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple4}
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
										</Link>
										<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple5}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple6}
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
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div>
									<div className="flex items-center justify-between">
									<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple7}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple8}
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
										</Link>
										<Link to='/detail'>
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
										</Link>
									</div>
									<div className="flex items-center justify-between">
									<Link to='/detail'>
										<div className="freshVegetableCard">
											<div className="relative">
												<div className="freshImgWrap">
													<img
														className="h-[150px] w-[150px] showApple mr-5"
														src={apple9}
														alt="apple"
													/>
													<img
														className="h-[150px] w-[150px] hideApple mr-5"
														src={apple10}
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
										</Link>
										<Link to='/detail'>
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
										</Link>
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
