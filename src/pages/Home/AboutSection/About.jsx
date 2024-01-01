/* eslint-disable react/no-unescaped-entities */
import { HiOutlineStar,HiOutlineShoppingBag, HiMap, HiTicket  } from 'react-icons/hi'
import './About.css'
const About = () => {
	return (
		<div className="mt-[80px] ">
			<div className="wrapContainer ">
				<h2 className="text-4xl text-center my-3 font-bol">Why trust Trendhaven ?</h2>
				<div className="about">
					<div className="aboutCard">
						<HiTicket className="aboutIcon" />
						<h3 className="text-2xl"> Freshness Guarantee:</h3>
						<p>
							Our commitment to quality is unwavering. With our freshness guarantee, you can trust that
							every vegetable you receive is handpicked{' '}
						</p>
					</div>
                    <div className="aboutCard">
						<HiOutlineStar className="aboutIcon" />
						<h3 className="text-2xl"> Fast Delivery</h3>
						<p>
                        Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked
						</p>
					</div>
                    <div className="aboutCard">
						<HiMap className="aboutIcon" />
						<h3 className="text-2xl">Exceptional Quality</h3>
						<p>
                        Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked
						</p>
					</div>
                    <div className="aboutCard">
						<HiOutlineShoppingBag  className="aboutIcon" />
						<h3 className="text-2xl"> Certified for Quality </h3>
						<p>
                        Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
