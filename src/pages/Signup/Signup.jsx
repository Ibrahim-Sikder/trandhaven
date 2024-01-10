import { TextField } from '@mui/material'
import './Signup.css';
import google from '../../../public/assets/google.png'
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Signup = () => {

    
	return (
		<div className="">
			<div className="signupWrap">
				<h3 className="text-3xl font-bold text-center mb-5  capitalize">Create a Zynax Account </h3>
               <div className="flex lg:justify-end md:justify-center">
               <Link to='/register'><span>Create a <b className='border-b-2 border-[#00AB55]'>business account</b> </span></Link>
               </div>
				<form className="SignupFormWrap">
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
					<small className='block w-[300px] mb-5'>
						By Creating an account, you agree to our User Agreement and  acknowledge reading our User Privacy
						Notice .
					</small>
					<button className='signupBtn bg-[#00AB55] text-white '>Create Account </button>
                    </div>
                    <div className="devider">
                            <div className="line"></div>
                            <div>or</div>
                            <div className="line"></div>
                    </div>
                    <div className='lg:mt-0 mt-5    '>
                    <button className='signupBtn mb-5 text-black  '><img className='w-10 h-10' src={google} alt="" /> <span>Continoue With Google </span> </button>
                    <button className='signupBtn bg-[#3F63AB] text-white '><FaFacebookF className='mr-5' size={25} /> <span>Continoue With Facebook </span> </button>
                    <span className='mt-3 block '>Already a member? <Link to='/login'>Sing In </Link> </span>
                    </div>
				</form>
               
				
			</div>
		</div>
	)
}

export default Signup
