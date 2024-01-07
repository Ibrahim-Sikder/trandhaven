import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../../../../public/assets/apple.jpg'
const ManageItems = () => {
	const allUsers = [
		{
			id: 1,
			name: 'Apple',
			price: 550
		},
		{
			id: 1,
			name: 'Apple',
			price: 550
		}
	]
	return (
		<div className="w-full">
			<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center mb-5">
				<h3 className="text-3xl">Manage Items </h3>
			</div>
			<div className="overflow-x-auto w-full">
				<table className="table ">
					<thead className="tableWrap">
						<tr>
							<th>SL No </th>
							<th>Vegetable</th>
							<th>Product Name</th>
							<th>Price</th>
							<th colSpan={2}>Action</th>
						</tr>
					</thead>
					<tbody>
						{allUsers.map((user, index) => (
							<tr key={user.id}>
								<td>{index + 1}</td>
								<td>
									<div className="mask p-2  h-[80px] w-[80px] mx-auto ">
										<img
											loading="lazy"
											className=" h-full rounded-full w-full object-cover text-center"
											src={img}
											alt="img"
										/>
									</div>
								</td>
								<td>{user.name}</td>
								<td> ${user.price} </td>{' '}
								<td>
									<Link href="/b2bdashboard/b2bagent/add-user/update">
										<FaEdit size={25} className="text-[#00ab55]" />
									</Link>
								</td>
								<td>
									<FaTrashAlt size={25} className="text-red-500" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ManageItems
