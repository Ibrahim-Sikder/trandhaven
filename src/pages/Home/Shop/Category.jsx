import category from '../../../../public/assets/fruit12.jpg'
import category2 from '../../../../public/assets/fruit13.jpg'
import category3 from '../../../../public/assets/fruit14.png'
import category4 from '../../../../public/assets/fruit4.jpg'
import category5 from '../../../../public/assets/fruit16.png'
const Category = () => {
	const categoryData = [
		{
			id: 1,
			img: category,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category2,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category3,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category4,
			title: 'Vegetable'
		},
		{
			id: 1,
			img: category5,
			title: 'Vegetable'
		},
	]
	return (
		<div className='mt-10'>
			<h3 className='text-2xl font-bold mb-8 shopTitle'>Shop By Category </h3>
			<div className='categoryCards'>
			{
				categoryData.map(category=><div key={category._id} className="categoryCard">
				<div className="categoryImg">
                <img src={category.img} alt="category" />
                </div>
                <h3 className='text-xl font-bold text-center mt-5'>{category.title}</h3>
			</div>)
			}
			</div>
		</div>
	)
}

export default Category
