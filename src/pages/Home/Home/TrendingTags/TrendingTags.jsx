import icon from '../../../../../public/assets/trending.jpg'
import icon2 from '../../../../../public/assets/trending2.jpg'
import icon3 from '../../../../../public/assets/trending3.jpg'
import icon4 from '../../../../../public/assets/trending4.jpg'
import icon5 from '../../../../../public/assets/trending5.jpg'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const TrendingTags = () => {
	var settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		autoplay: true,
		speed: 500666666666600,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true
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
		<div className="wrapContainer">
			<div className="slidersWraps my-[80px]">
				<h3 className="text-4xl font-bold">Trendings Tags </h3>
				<Slider {...settings}>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Dairy & Eggs </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon2} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Fish & Seafood </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon3} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Fruit </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon4} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Meat & Poultry </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link>
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon5} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Milk & Drinks </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon2} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Fish & Seafood </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon3} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Fruit </h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="slider">
						<Link to="/shop">
							<div className="vegetabelCategory">
								<div className="vegetableImgWrap">
									<img className="vegetableIcon" src={icon} alt="" />
								</div>
								<div className="text-center mt-2">
									<h3 className="text-xl hover:text-[#00ab55] transition-all">Dairy & Eggs</h3>
								</div>
							</div>
						</Link>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default TrendingTags
