import category from '../../../../public/assets/vegetable5.png'
const Category = () => {
	return (
		<div className='mt-10'>
			<div className="categoryCard">
				<div className="categoryImg">
                <img src={category} alt="category" />
                </div>
                <h3 className='text-xl font-bold text-center mt-5'>Vegetable</h3>
			</div>
		</div>
	)
}

export default Category
