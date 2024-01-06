import './VegetableCategory.css'
import icon from '../../../../public/assets/icon.png'
import icon2 from '../../../../public/assets/icon2.png'
import icon3 from '../../../../public/assets/icon3.png'
import icon4 from '../../../../public/assets/icon4.png'
import icon5 from '../../../../public/assets/icon5.png'
import milk from '../../../../public/assets/milkBanner.jpg'
import milk2 from '../../../../public/assets/milkBanner2.jpg'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const VegetableCategory = () => {
	
	const shopCategory = [
		{
			id: 1,
			title: 'Fresh Fruite Sale',
			desc: 'Broccoli is a green vegetable with a ranching structure and dense'
		},
		{
			id: 1,
			title: 'Fresh Fruite Sale',
			desc: 'Broccoli is a green vegetable with a ranching structure and dense'
		},
		{
			id: 1,
			title: 'Fresh Fruite Sale',
			desc: 'Broccoli is a green vegetable with a ranching structure and dense'
		}
	]

	var settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		autoplay: true,
		speed: 50000,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<div className='wrapContainer'>
			<div className="slidersWraps">
				<Slider {...settings}>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Fish </h3>
							<small>33 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon2} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Mangoes</h3>
							<small>63 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon3} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Onion</h3>
							<small>50 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon4} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Mangoes</h3>
							<small>33 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon5} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Vegetable</h3>
							<small>100 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon2} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Mangoes</h3>
							<small>23 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon3} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Onion</h3>
							<small>45 items available </small>
						</div>
					</div>
					</div>
					<div className="slider">
					<div className="vegetabelCategory">
						<div className="vegetableImgWrap">
							<img className="vegetableIcon" src={icon} alt="" />
						</div>
						<div className="text-center mt-2">
							<h3 className="text-3xl font-bold hover:text-[#00ab55] transition-all" >Fish</h3>
							<small>20 items available </small>
						</div>
					</div>
					</div>
					
				</Slider>
			</div>
			<div className="flex items-center mt-8 justify-between">
				<img src={milk} alt="" />
				<img src={milk2} alt="" />
			</div>
			<div className="wrapContainer">
			<div className="categoryCardWrap grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-content-center ">
				{shopCategory.map((shop) => (
					<div key={shop.id} className="vegetableShopCategory">
						<div className="categoryCardContent flex items-center justify-between">
							<div>
								<h3 className="text-4xl font-bold ">{shop.title}</h3>
								<h4 className="text-2xl">
									Up to <b className="text-[red] text-4xl font-bold">40%</b>
								</h4>
								<p className="leading-2 my-3 text-xl">{shop.desc} </p>
								<Link to="/shop">
									<button className=" shopBtn">Shop Now </button>
								</Link>
							</div>
							<div className="absolute -top-20 right-5 rounded-full bg-orange-500 w-[60px] text-center h-[60px] grid place-content-center p-2">
								<small>On Sale</small>
							</div>
						</div>
					</div>
				))}
			</div>
			</div>
			
		</div>
	)
}

export default VegetableCategory
