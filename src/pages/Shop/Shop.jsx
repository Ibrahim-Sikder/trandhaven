import './Shop.css'
import MultiRangeSlider from 'multi-range-slider-react'
import fruit from '../../../public/assets/fruit13.jpg'
import fruit2 from '../../../public/assets/fruit14.png'
import fruit3 from '../../../public/assets/fruit16.png'
import { StarBorder } from '@mui/icons-material'
const Shop = () => {
	return (
		<div>
			<div className="wrapContainer">
				<div className="shopContainer">
					<div className="shopContainerLeftSide">
						<div className="productCategories ">
							<h3 className="text-4xl font-bold">Shop</h3>
							<h4 className="mt-3 "> Product categories </h4>
							<ul>
								<li>Dairy & Eggs</li>
								<li>Fish & Seafood </li>
								<li>Fruit </li>
								<li>Meat & Poultry </li>
								<li>Milk & Drinks </li>
								<li>Vegetables </li>
							</ul>
						</div>
						<hr />
						<h3 className="text-xl font-bold">Price </h3>
						<div className="priceRange">
							<div className="rang">
								<MultiRangeSlider />
							</div>
							<p>
								Price: <b>$50 - $70 </b>
							</p>

							<button className="filterBtn mt-3 ">Filter</button>
						</div>
						<hr className="my-8" />
						<div className="productTags">
							<h3 className="text-2xl font-bold">Product Tags </h3>
							<div className="productTagButtonGroup">
								<div className="flex items-center">
									<button className="productTagBtn">Banana</button>
									<button className="productTagBtn">Egg</button>
								</div>
								<div>
									<button className="productTagBtn">Vegetable</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Apple</button>
									<button className="productTagBtn">Orange </button>
									<button className="productTagBtn">Mangoes </button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Chicken</button>
									<button className="productTagBtn">Frozen Chicken</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Organic </button>
									<button className="productTagBtn">Onion</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Fresh milk</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
									<button className="productTagBtn">Tomato</button>
									<button className="productTagBtn">Banana</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
								</div>
								<div className="flex items-center">
									<button className="productTagBtn">Home Food</button>
								</div>
							</div>
						</div>

						<hr className="my-8" />
						<div className="color">
							<ul>
								<li>Geen (4)</li>
								<li>Crimson (4)</li>
								<li>Light Green (9)</li>
								<li>Yellow (3)</li>
								<li>Yellow (3)</li>
							</ul>
						</div>
						<hr className="my-8" />
						<div className="product">
                        <div className=" flex items-center   ">
							<img className='w-[80px]' src={fruit} alt="fruit" />
							<div className=' ml-8'> 
								<div>Zesco Ripe Bananas </div>
								<div>
									<div>
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
									</div>
								<b>$199.00</b>
								</div>
							</div>
						</div>
                        <div className=" flex items-center my-3  ">
							<img className='w-[80px]' src={fruit2} alt="fruit" />
							<div className=' ml-8'> 
								<div>Zesco Ripe Bananas </div>
								<div>
									<div>
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
									</div>
								<b>$199.00</b>
								</div>
							</div>
						</div>
                        <div className=" flex items-center   ">
							<img className='w-[80px]' src={fruit3} alt="fruit" />
							<div className=' ml-8'> 
								<div>Zesco Ripe Bananas </div>
								<div>
									<div>
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
										<StarBorder className="shopReviewIcon" />
									</div>
								<b>$199.00</b>
								</div>
							</div>
						</div>
                        </div>
					</div>
					<div className="shopContainerRightSide" />
				</div>
			</div>
		</div>
	)
}

export default Shop
