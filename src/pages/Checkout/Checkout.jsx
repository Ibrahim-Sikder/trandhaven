import './Checkout.css'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
const Checkout = () => {
	return (
		<div className="wrapContainer">
			<div className="checkoutWrap mt-5 flex justify-between ">
				<div className="checkoutLeftSide">
					<h3 className="text-3xl font-bold">Billing Details </h3>
					<div className="mt-5 flex items-center jsutify-between">
						<TextField className="checkoutInputField" required id="outlined-required" label="First Name" />
						<TextField className="checkoutInputField" required id="outlined-required" label="Last Name" />
					</div>
					<div className="my-3">
						<TextField
							className="checkoutInputField2"
							id="outlined-required"
							label="Company name (optional)"
						/>
					</div>
					<div className="my-3">
						{/* <TextField className='checkoutInputField2' required id="outlined-required" label="Country / Region" /> */}
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Coutry </InputLabel>
							<Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
								<MenuItem value={10}>Bangladesh</MenuItem>
								<MenuItem value={20}>United States </MenuItem>
								<MenuItem value={30}>United Kingdom </MenuItem>
								<MenuItem value={30}>India </MenuItem>
								<MenuItem value={30}>Vietname</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="my-3">
						<TextField
							className="checkoutInputField2"
							required
							id="outlined-required"
							label="House number and street name"
						/>
					</div>
					<div className="my-3">
						<TextField
							className="checkoutInputField2"
							required
							id="outlined-required"
							label="Apartment, suite, unit, etc. (option)"
						/>
					</div>
					<div className="my-3">
						<TextField
							className="checkoutInputField2"
							required
							id="outlined-required"
							label="Town / City "
						/>
					</div>
					<div className="my-3">
						<TextField className="checkoutInputField2" required id="outlined-required" label="ZIP Code " />
					</div>
					<div className="my-3">
						<TextField className="checkoutInputField2" required id="outlined-required" label="Phone" />
					</div>
					<div className="my-3">
						<TextField
							className="checkoutInputField2"
							required
							id="outlined-required"
							label="Email address "
						/>
					</div>
					<div className="flex items-center">
						<Checkbox />
						<span>Ship to a different address?</span>
					</div>
					<div className="my-3">
						<label> Other Note </label>
						<textarea className="otherNote" />
					</div>
				</div>

				<div className="checkoutRightSide">
					<div className="yourOrder">
						<h3 className="text-2xl font-bold mb-3">Your Order </h3>
						<div className="flex items-center justify-between ">
							<span>Sub Total </span>
							<span>৳৫৯০</span>
						</div>
						<div className="flex items-center justify-between ">
							<span>Shipping </span>
							<span>Delivery Cost (Product Delivery Free)</span>
						</div>
						<div className="flex items-center justify-between ">
							<span>Total </span>
							<span>৳১০৯০</span>
						</div>
					</div>
					<div className="delivery">
						<div className="cashOnDelivery">
							<div className="flex items-center">
                            <FormControlLabel value="start" control={<Radio />}labelPlacement="start" />
                            <small className='ml-2'>Cash on delivery</small>
                            </div>
                            {/* <span>Pay with cash upon delivery.</span> */}
						</div>
                        <div className="cashOnDelivery">
							<div className="flex items-center">
                            <FormControlLabel value="start" control={<Radio />}labelPlacement="start" />
                            <small className='ml-2'>Pay Online(Credit/Debit Card/MobileBanking/NetBanking/bKash)</small>
                            </div>
                            <small className='block'>Verified by </small>
                            <span className='sslComerz'>SSLCOMMERZ</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout
