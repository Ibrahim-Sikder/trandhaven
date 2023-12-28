import TextField from '@mui/material/TextField'
import './MyAccount.css'
import user from '../../../../public/assets/user.jpg'
const MyAccount = () => {
	return (
		<div className="mt-10">
			<div className="flex items-center justify-center">
				<img className="w-32 h-32 rounded-full" src={user} alt="user" />
				<div className="ml-2">
					<h3 className="text-3xl font-bold">MR Khan</h3>
					<span>softypy@gmail.com</span>
				</div>
			</div>
			<div className="mt-5 flex items-center jsutify-between w-full">
				<TextField className="accountInput" id="outlined-required" label="First Name" />
				<TextField className="accountInput" id="outlined-required" label="Last Name" />
			</div>
			<div>
				<TextField className="accountInput2" id="outlined-required" label="Email Address" />
			</div>
			<div className="mt-5">
				<h3 className="text-3xl font-bold">Change Password </h3>
				<TextField className="accountInput2" id="outlined-required" label="Current Password" />
			</div>
			<div>
				<TextField className="accountInput2" id="outlined-required" label="New Password" />
			</div>
			<div>
				<TextField className="accountInput2" id="outlined-required" label="Confirm Password" />
			</div>
			<div className="mt-3">
				<button className="shopBtn accountBtn">Update Your Account </button>
			</div>
		</div>
	)
}

export default MyAccount
