import { FormControl, InputLabel, Select, TextField } from '@mui/material'
import './AddProduct.css'
const AddProduct = () => {
	return (
		<div className='productItemsWrap'>
			<h3 className="text-3xl font-semibold my-3 text-center ">Add Product: </h3>
			<div >
                <div className="mt-3 flex items-center jsutify-between w-full">
                <FormControl className="productField">
					<InputLabel className="accountInput" htmlFor="grouped-native-select">
						Select Category{' '}
					</InputLabel>
					<Select
						className="accountInput"
						native
						defaultValue=""
						id="grouped-native-select"
						label="Select Category "
					>
						<option aria-label="None" value="" />
						<option value="First Category "> Vegetable </option>
						<option value="First Category "> Meat & Poultry </option>
						<option value="First Category "> Milk & Drinks  </option>
						<option value="First Category "> Fish & Seafood </option>
						<option value="First Category "> Fruits </option>
					</Select>
				</FormControl>
                <FormControl className="productField">
					<InputLabel className="accountInput" htmlFor="grouped-native-select">
						Select Sub Category{' '}
					</InputLabel>
					<Select
						className="accountInput"
						native
						defaultValue=""
						id="grouped-native-select"
						label="Select Category "
					>
						<option aria-label="None" value="" />
						<option value="First Category "> Vegetable </option>
						<option value="First Category "> Meat & Poultry </option>
						<option value="First Category "> Milk & Drinks  </option>
						<option value="First Category "> Fish & Seafood </option>
						<option value="First Category "> Fruits </option>
					</Select>
				</FormControl>
				
				</div>
                <div className="mt-5 flex items-center jsutify-between w-full">
					<TextField className="accountInput" id="outlined-required" label="Product Name" />
					<TextField className="accountInput" id="outlined-required" label="Product Price" />
				</div>
                <div className="mt-5 flex items-center jsutify-between w-full">
                <TextField className="accountInput" type='file' id="outlined-required"  />
					<TextField className="accountInput" id="outlined-required" label="Date" />
				</div>
               <div className="mt-3">
                <label className='block'> Description </label>
               <textarea className='description'></textarea>
               </div>


			</div>
		</div>
	)
}

export default AddProduct
