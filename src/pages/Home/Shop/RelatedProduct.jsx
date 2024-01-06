/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
import './Shop.css'
import { StarBorder } from '@mui/icons-material'
import fruit6 from '../../../../public/assets/apple.jpg'
import fruit7 from '../../../../public/assets/apple2.jpg'
import fruit8 from '../../../../public/assets/apple4.jpg'
import fruit9 from '../../../../public/assets/apple5.jpg'
import fruit11 from '../../../../public/assets/apple6.jpg'
import fruit12 from '../../../../public/assets/apple7.jpg'
import fruit13 from '../../../../public/assets/apple8.jpg'
import fruit14 from '../../../../public/assets/apple9.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaShoppingCart } from 'react-icons/fa'

const RelatedProduct = ({title}) => {
	

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
		}
	]
	

	return (
		<div className="">
			<div>
				<h3 className="text-4xl text-center md:text-left font-bold mb-8 shopTitle">{title}</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
					{shopData.map((shop) => (
						<div key={shop.id} className="shopCard relatedProduct">
							<div className="imgWrap">
								<img src={shop.img} alt="" />
								
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

export default RelatedProduct
