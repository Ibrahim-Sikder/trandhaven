/* eslint-disable react/no-unescaped-entities */
import { FormControl, InputLabel, Select, TextField } from '@mui/material'
import './Signup.css'

const BusinessAccount = () => {
	return (
		<div className="">
			<div className="signupWrap">
				<h3 className="text-3xl font-bold text-center mb-5  capitalize">Create an Zynax Account </h3>
				<form className="">
					<div className="my-5">
						<TextField
							className="businessInput"
							label="Business Name "
							id="outlined-size-small"
							size="small"
						/>
					</div>
					<div className="my-5">
						<TextField
							className="businessInput"
							label="Business Email "
							id="outlined-size-small"
							size="small"
						/>
					</div>
					<div className="my-5">
						<TextField className="businessInput" label="Password" id="outlined-size-small" size="small" />
					</div>
					<div className="mb-5">
						<FormControl className="businessInput">
							<InputLabel className="businessInput" htmlFor="grouped-native-select">
								Select Business Location
							</InputLabel>
							<Select
								className="businessInput"
								native
								defaultValue=""
								id="grouped-native-select"
								label="Select Business Location"
							>
								<option aria-label="None" value="" />
								<option value="First Category "> Bangladesh </option>
								<option value="First Category "> Unitate State </option>
								<option value="First Category "> India </option>
								<option value="First Category "> Pakistan </option>
								<option value="First Category "> Vietname </option>
							</Select>
						</FormControl>
					</div>
					<small>If you don't have a legal business, enter country of your residence.</small>
					<div className="flex items-center">
						<input type="checkbox" />
						<span className="ml-3"> I only want to buy on eBay. I don't want to sell.</span>
					</div>
					<span className="my-5 block ">
						By Creating an account, you agree to our User Agreement and acknowledge reading our User Privacy
						Notice.
					</span>

                    <button className='signupBtn bg-[#00AB55] text-white businessBtn'>Create Account </button>
				</form>
			</div>
		</div>
	)
}

export default BusinessAccount
