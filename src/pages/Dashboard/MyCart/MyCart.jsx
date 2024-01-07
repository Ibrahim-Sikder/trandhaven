import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../../../../public/assets/apple.jpg'
const MyCart = () => {

    const allUsers =[
        {
          id: 1,
          name: "Apple",
          price: 550,
          },
         
       ]
	return (
		<div className="w-full">
			<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center mb-5">
				<h3 className="text-3xl">Total Items:55 </h3>
				<h3 className="text-3xl">Total Price: $8</h3>
				<Link to="/dashboard/payment">
					<button className="btn btn-warning btn-sm">PAY</button>
				</Link>
			</div>
			<div className="overflow-x-auto w-full">


                <table className="table ">
            <thead className="tableWrap">
              <tr>
                <th>SL No </th>
                <th>Vegetable</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allUsers.map((user, index )=><tr key={user.id}>
                    <td>{index + 1 }</td>
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
                  <td> ${user.price} </td> <td>
                  <button className="btn btn-ghost bg-red-600  text-white">
									<FaTrashAlt />
								</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
			</div>
		</div>
	)
}

export default MyCart
