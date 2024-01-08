import { TextField } from '@mui/material'
import { FaFacebookF } from 'react-icons/fa6'
import google from '../../../public/assets/google.png'
const Login = () => {
	return (
		<div>
			<div className="signupWrap">
				<div className="text-center">
                <h3 className="text-3xl font-bold text-center mb-5  capitalize">Hello</h3>
                <span>Sign In Zynax or <b className='border-b-2 border-[#00AB55]'>create an account </b></span>
                </div>
				<form className="businessFormWrap">
					<div className="my-5">
						<TextField
							className="businessInput"
							label="Email or Username "
							id="outlined-size-small"
							size="small"
						/>
					</div>
					<button className="signupBtn loginBtn bg-[#00AB55] text-white businessBtn">Continoue </button>
					<div className="flex flex-col my-3 w-[320px] border-opacity-50">
						<div className="divider">OR</div>
					</div>
					<div>
						<button className="signupBtn loginBtn mb-5 text-black  ">
							<img className="w-10 h-10" src={google} alt="" /> <span>Continoue With Google </span>{' '}
						</button>
						<button className="signupBtn loginBtn bg-[#3F63AB] text-white ">
							<FaFacebookF className="mr-5" size={25} /> <span>Continoue With Facebook </span>{' '}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
