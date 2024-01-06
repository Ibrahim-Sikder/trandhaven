import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers } from 'react-icons/fa';
import {  HiOutlineShoppingCart } from "react-icons/hi";
const Dashboard = () => {
    return (
        <div className="flex justify-between">
          <aside>
                <div className="bg-[#00ab55] w-[250px] min-h-screen p-5 text-white ">
                <ul className="dashboardItems">
					<li className="">
						<NavLink to="/dashboard/adminhome ">
							<div className="flex items-center">
                            <FaHome className="mr-2"/><span> Admin Home</span>
                            </div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/addItem">
							<div className="flex items-center">
                            <HiOutlineShoppingCart className="mr-2"/><span> Add an Item</span>
                            </div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/manageitems">
						<div className="flex items-center">
                        <FaWallet className="mr-2"/>  <span>Manage Items</span>
                        </div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/">
							<div className="flex items-center">
                            <FaBook className="mr-2"/> <span> Manage Bookings </span>
                            </div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/allusers">
							<div className="flex items-center">
                            <FaUsers className="mr-2"/> <span>All Users</span>
                            </div>
						</NavLink>
					</li>

					<li>
						<NavLink to="/dashboard/userhome">
							<div className="flex items-center"><FaHome className="mr-2"/> <span>User Home</span></div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/">
							<div className="flex items-center">
                            <FaCalendarAlt className="mr-2"/> <span>Reservations</span>
                            </div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/">
						<div className="flex items-center">
                        <FaWallet className="mr-2"/> <span>Payment History</span>
                        </div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/mycart">
						<div className="flex items-center">
                        <FaShoppingCart className="mr-2" /> 
							<span> My Cart  <small className="badge badge-secondary">+0</small></span>
                        </div>
						</NavLink>
					</li>

					<div className="divider" />
					<li>
						<NavLink to="/">
							<div className="flex items-center">
                            <FaHome className="mr-2"/> <span>Home</span>
                            </div>
						</NavLink>{' '}
					</li>
					<li>
						<NavLink to="/menu"> Our Menu</NavLink>
					</li>
					<li>
						<NavLink to="/order/salad">Order Food</NavLink>
					</li>
				</ul>
                </div>
          </aside>
            <Outlet/>
        </div>
    );
};

export default Dashboard;