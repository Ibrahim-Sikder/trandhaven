import {  NavLink, Outlet } from 'react-router-dom'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import {
	HiOutlineLogin,
	HiOutlineLocationMarker,
	HiOutlineUpload,
	HiOutlineUser,
	HiOutlineHome,
	HiOutlineShoppingCart
} from 'react-icons/hi'
import './Profile.css'
const Profile = () => {
	return (
		<div>
			<Header />
			<div className="profileWrap  wrapContainer">
				<aside className="sidebar">
					<div className="sidebarWrap">
						<NavLink to="/my-account">
							<div className="orderItems">
								<HiOutlineHome className="" size={20} />
								<span className="ml-3">My Account </span>
							</div>
						</NavLink>

						<NavLink to="/my-account/order">
							<div className="orderItems">
								<HiOutlineShoppingCart size={20} />
								<span className="ml-3">My Order</span>
							</div>
						</NavLink>
						<NavLink to="/my-account/address" >
							<div className="orderItems ">
								<HiOutlineLocationMarker size={20} />
								<span className="ml-3">Address </span>
							</div>
						</NavLink>
						<div className="orderItems">
							<HiOutlineUpload size={20} />
							<span className="ml-3"> My Wishlist</span>
						</div>
						<div className="orderItems">
							<HiOutlineUser size={20} />
							<span className="ml-3">My Reviews</span>
						</div>
						<NavLink to="/my-account/cancel"> 
							<div className="orderItems">
								<HiOutlineUser size={20} />
								<span className="ml-3">My Returns & Cancellations</span>
							</div>
						</NavLink>
						<div className="orderItems">
							<HiOutlineLogin size={20} />
							<span className="ml-3">Log Out </span>
						</div>
					</div>
				</aside>

				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Profile
