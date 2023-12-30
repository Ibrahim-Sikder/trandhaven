/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
import { StarBorder } from '@mui/icons-material'
import fruit2 from '../../../public/assets/vegetable21.jpg'
import fruit3 from '../../../public/assets/vegetable26.jpg'
import fruit4 from '../../../public/assets/vegetable24.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const WishList = ({ title }) => {

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
		}
	]

	return (
		<div className="wrapContainer">
            <h3 className="text-3xl font-bold my-10">Wishlist </h3>
			<div>
				<h3 className="text-4xl text-center md:text-left font-bold mb-8 shopTitle">{title}</h3>
				<div className="shopCardsWrap">
					{shopData.map((shop) => (
						<div key={shop.id} className="shopCard">
							<div className="imgWrap">
								<img src={shop.img} alt="" />
							
							</div>
							<div className="shopContent">
								<h3 className="text-2xl font-bold">In Stock</h3>
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
                            <button className=' w-[50px] mx-auto hover:border-gray-700 hover:border-b-2 transition-all mb-2 ml-3'>Remove</button>
						</div>
                       
					))}
				</div>
			</div>
		</div>
	)
}

export default WishList
