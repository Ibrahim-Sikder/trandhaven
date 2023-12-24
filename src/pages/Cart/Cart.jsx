import './Cart.css'
import img from '../../../public/assets/fruit14.png'
import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import TextField from '@mui/material/TextField';

const Cart = () => {
	const [ order, setOrder ] = useState(0)

	const incrementOrder = () => {
		setOrder(order + 1)
	}
	const decrementOrder = () => {
		if (order < 1) {
			setOrder(0)
		} else {
			setOrder(order - 1)
		}
	}
	return (
		<div className="wrapContainer">
            <div className="mt-5">
                <span>Home </span>
                <span> \ </span>
                <span> Cart</span>
                <h3 className="text-3xl font-bold my-5">Cart </h3>
            </div>
			<div className="flex justify-between ">
                
				<table className="table cartTable">
					<tr>
						<th> Image</th>
						<th> Porduct</th>
						<th> Price </th>
						<th> Quantity </th>
						<th> Total </th>
						<th> Remove </th>
					</tr>
					<tbody>
						<tr>
							<td>
								<img className="w-[60px]" src={img} alt="fruit" />
							</td>
							<td>
								<b>Beef Potjiekos Per - 500g</b>
							</td>
							<td> $500</td>
							<td>
								<div className="increaseDecressBtnWrap quantity mx-auto">
									<small onClick={decrementOrder}>
										<FaMinus />
									</small>
									<span> {order} </span>
									<small onClick={incrementOrder}>
										<FaPlus />
									</small>
								</div>
							</td>
							<td> $600 </td>
							<td>
								<FaRegTrashAlt className="trashIcon" />
							</td>
						</tr>
                        <tr>
							<td>
								<img className="w-[60px]" src={img} alt="fruit" />
							</td>
							<td>
								<b>Beef Potjiekos Per - 500g</b>
							</td>
							<td> $500</td>
							<td>
								<div className="increaseDecressBtnWrap quantity mx-auto">
									<small onClick={decrementOrder}>
										<FaMinus />
									</small>
									<span> {order} </span>
									<small onClick={incrementOrder}>
										<FaPlus />
									</small>
								</div>
							</td>
							<td> $600 </td>
							<td>
								<FaRegTrashAlt className="trashIcon" />
							</td>
						</tr>
					</tbody>
				</table>
				<div className="shippingCart">
					<h3 className="text-2xl font-bold">Cart Totals </h3>
					<div className="flex items-center justify-between my-2">
						<span>Sub Total </span>
						<b>$599</b>
					</div>
					<div className="flex items-center justify-between my-2">
						<span>Shipping </span>
						<b>$9</b>
					</div>
					<hr />
					<div className="flex items-center justify-between my-2">
						<b>Total </b>
						<b>$509</b>
					</div>
					<button className="shopBtn checkoutBtn">Procced To Checkout </button>
				</div>
              
			</div>
            <div className='mt-5'>
                <TextField id="outlined-basic" label="Coupon Apply " variant="outlined" />
                </div>
                <button className='shopBtn mt-3'>Apply </button>
		</div>
	)
}

export default Cart
