import category from '../../../../public/assets/fruit12.jpg'
import category2 from '../../../../public/assets/fruit13.jpg'
import category3 from '../../../../public/assets/fruit14.png'
import category4 from '../../../../public/assets/fruit4.jpg'
import category5 from '../../../../public/assets/fruit16.png'
import category12 from '../../../../public/assets/fruit17.jpg'
import category6 from '../../../../public/assets/fruit18.png'
import category7 from '../../../../public/assets/fruit19.jpg'
import category8 from '../../../../public/assets/fruit20.png'
import category9 from '../../../../public/assets/fruit21.jpg'
import category10 from '../../../../public/assets/fruit21.jpg'
import category11 from '../../../../public/assets/fruit22.jpg'
import { Link } from 'react-router-dom'
const Category = () => {
	const categoryData = [
		{
			id: 1,
			img: category,
			title: 'Orange'
		},
		{
			id: 1,
			img: category2,
			title: 'Licu'
		},
		{
			id: 1,
			img: category3,
			title: 'Apple'
		},
		{
			id: 1,
			img: category4,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category5,
			title: 'Banana'
		},
		{
			id: 1,
			img: category6,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category7,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category8,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category9,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category10,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category11,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category12,
			title: 'Vegetable'
		},
	]
	return (
		<div className='mt-10'>
			<h3 className='text-4xl text-center md:text-left font-bold mb-8 shopTitle'>Shop By Category </h3>
			<Link to='/shop'>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10'>
			{
				categoryData.map(category=><div key={category._id} className="categoryCard">
				<div className="categoryImg">
                <img src={category.img} alt="category" />
                </div>
                <h3 className='text-xl font-bold text-center mt-5'>{category.title}</h3>
			</div>)
			}
			</div>
			</Link>
		</div>
	)
}

export default Category
