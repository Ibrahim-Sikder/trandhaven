import { Link, Outlet } from 'react-router-dom'
import { FaShoppingCart, FaWallet, FaHome, FaBook, FaUsers, FaHeadset } from 'react-icons/fa'
import { HiDatabase, HiOutlineLogout, HiOutlineShoppingCart } from 'react-icons/hi'
const Dashboard = () => {
	return (
		<div className="flex justify-between">
			<aside className="bg-[#00ab55] w-[20%] min-h-screen p-5 text-white mr-3">
				<div className="flex justify-between flex-col min-h-screen ">
                <div>
					<ul className="dashboardItems">
						<li className="">
							<Link to="/dashboard ">
								<div className="flex items-center">
									<FaHome className="mr-2" />
									<span> Admin Home</span>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/addproduct">
								<div className="flex items-center">
									<HiOutlineShoppingCart className="mr-2" />
									<span> Add an Product </span>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/manageitems">
								<div className="flex items-center">
									<FaWallet className="mr-2" /> <span>Manage Items</span>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div className="flex items-center">
									<FaBook className="mr-2" /> <span> Manage Bookings </span>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/allusers">
								<div className="flex items-center">
									<FaUsers className="mr-2" /> <span>All Users</span>
								</div>
							</Link>
						</li>

						<li>
							<Link to="/dashboard/userhome">
								<div className="flex items-center">
									<FaHome className="mr-2" /> <span>User Home</span>
								</div>
							</Link>
						</li>
						
						<li>
							<Link to="/dashboard/payment">
								<div className="flex items-center">
									<FaWallet className="mr-2" /> <span>Payment History</span>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/mycart">
								<div className="flex items-center">
									<FaShoppingCart className="mr-2" />
									<span>
										{' '}
										My Cart <small className="badge badge-secondary">+0</small>
									</span>
								</div>
							</Link>
						</li>

						<div className="divider" />
						<li>
							<Link to="/">
								<div className="flex items-center">
									<FaHome className="mr-2" /> <span>Home</span>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/menu"> Our Product </Link>
						</li>
						<li>
							<Link to="/order/salad">Order Product</Link>
						</li>
					</ul>
				</div>
				<div>
					<div className="flex items-center">
						<HiDatabase className="mr-2" />
						<span> Database Backup</span>
					</div>
                    <div className="flex items-center">
						<FaHeadset className="mr-2" />
						<span> Customer Service </span>
					</div>
                    <div className="flex items-center">
						<HiOutlineLogout className="mr-2" />
						<span> Log Out </span>
					</div>
				</div>
                </div>
			</aside>
			<div className="w-[80%]">
			<Outlet />
			</div>
		</div>
	)
}

export default Dashboard
