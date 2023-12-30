import './VegetableCategory.css'
import icon from '../../../../public/assets/icon.png'
import icon2 from '../../../../public/assets/icon2.png'
import icon3 from '../../../../public/assets/icon3.png'
import icon4 from '../../../../public/assets/icon4.png'
import icon5 from '../../../../public/assets/icon5.png'
import { Link } from 'react-router-dom'
const VegetableCategory = () => {
	const vegetableCategory = [
		{
			id: 1,
			title: 'Fish',
			icon: icon
		},
		{
			id: 1,
			title: 'Apple',
			icon: icon2
		},
		{
			id: 1,
			title: 'Green Onion ',
			icon: icon3
		},
		{
			id: 1,
			title: 'Mangoes ',
			icon: icon4
		},
		{
			id: 1,
			title: 'Fresh Vegetable',
			icon: icon5
		}
	]
    const shopCategory = [
        {
            id:1,
            title: "Fresh Fruite Sale",
            desc: 'Broccoli is a green vegetable with a ranching structure and dense'
        },
        {
            id:1,
            title: "Fresh Fruite Sale",
            desc: 'Broccoli is a green vegetable with a ranching structure and dense'
        },
        {
            id:1,
            title: "Fresh Fruite Sale",
            desc: 'Broccoli is a green vegetable with a ranching structure and dense'
        },
    ]
	return (
		<div className="wrapContainer">
			<Link to="/shop">
				<div className="grid gap-10 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-24 place-content-center ">
					{vegetableCategory.map((category) => (
						<div key={category.id} className="vegetabelCategory">
							<div className="vegetableImgWrap">
								<img className="vegetableIcon" src={category.icon} alt="" />
							</div>
							<div className="text-center mt-2">
								<h3 className="text-xl font-bold hover:text-[#00ab55] transition-all">
									{category.title}
								</h3>
								<small>33 items </small>
							</div>
						</div>
					))}
				</div>
			</Link>

			<div className="categoryCardWrap grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-content-center ">
				{
                    shopCategory.map(shop=><div key={shop.id} className="vegetableShopCategory">
					<div className="categoryCardContent flex items-center justify-between">
						<div>
                        <h3 className="text-4xl font-bold ">{shop.title}</h3>
						<h4 className="text-2xl">
							Up to <b className='text-[red] text-4xl font-bold'>40%</b>
						</h4>
						<p className='leading-2 my-3 text-xl'>{shop.desc} </p>
						<Link to='/shop'><button className=" shopBtn">Shop Now </button></Link>
                        </div>
                        <div className='absolute -top-20 right-5 rounded-full bg-orange-500 w-[60px] text-center h-[60px] grid place-content-center p-2'>
                            <small>On Sale</small>
                        </div>
					</div>
				</div>)
                }
			</div>
		</div>
	)
}

export default VegetableCategory
