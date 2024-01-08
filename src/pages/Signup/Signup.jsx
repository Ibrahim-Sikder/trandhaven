import { TextField } from '@mui/material'
import './Signup.css';
import google from '../../../public/assets/google.png'
import { FaFacebookF } from "react-icons/fa6";
const Signup = () => {
	return (
		<div className="bg-[#EFF0F5]">
			<div className="wrapContainer">
				<h3 className="text-3xl font-bold capitalize">Create an Zynax Account </h3>

				<form className="SignupFormWrap flex items-center ">
					<div>
                    <div className="flex items-center">
                    <TextField className="SingleInput" label="First Name " id="outlined-size-small" size="small" />
						<TextField className="SingleInput" label="Last Name " id="outlined-size-small" size="small" />
					</div>
					<div className="flex items-center mt-5">
                    <TextField className="signupInput" label="Email Address " id="outlined-size-small" size="small" />
					</div>
                    <div className="flex items-center my-5">
                    <TextField className="signupInput" label="Password " id="outlined-size-small" size="small" />
					</div>
					<small className='block'>
						By Creating an account, you agree to our User Agreement and acknowledge reading our User Privacy
						Notice .
					</small>
					<button className='signupBtn bg-[#00AB55] text-white '>Create Account </button>
                    </div>
                    <div className="devider">
                            <div className="line"></div>
                            <div>Or</div>
                            <div className="line"></div>
                    </div>
                    <div>
                    <button className='signupBtn mb-5 text-black text-white '><img className='w-10 h-10' src={google} alt="" /> <span>Continoue With Google </span> </button>
                    <button className='signupBtn bg-[#3F63AB] text-white '><FaFacebookF className='mr-5' size={25} /> <span>Continoue With Facebook </span> </button>
                    </div>
				</form>
				
			</div>
		</div>
	)
}

export default Signup
