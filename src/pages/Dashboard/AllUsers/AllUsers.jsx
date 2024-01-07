

import { FaEdit, FaTrashAlt,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import './AllUser.css'
import img from '../../../../public/assets/user.jpg'
const AllUsers = () => {
   const allUsers =[
    {
      id: 1,
      name: "Ibrahim Sikder",
      email: "ibrahimsikder@gmail.com",
      },
      {
        id: 1,
        name: "Ibrahim Sikder",
        email: "ibrahimsikder@gmail.com",
        },
        {
          id: 1,
          name: "Ibrahim Sikder",
          email: "ibrahimsikder@gmail.com",
          },
          {
            id: 1,
            name: "Ibrahim Sikder",
            email: "ibrahimsikder@gmail.com",
            },
   ]

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4 text-center ">Total Users: </h3>
            <div className="overflow-x-auto">
            <table className="table ">
            <thead className="tableWrap">
              <tr>
                <th>Image</th>
                <th>Full Name</th>
                <th>User Name</th>
                <th>Email </th>
                <th>Role </th>
                <th>Date</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allUsers.map(user=><tr key={user.id}>
                  <td>
                    <div className="mask p-2  h-[60px] w-[60px] mx-auto ">
                      <img
                        loading="lazy"
                        className=" h-full rounded-full w-full object-cover text-center"
                          src={img}
                        alt="img"
                      />
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>Ibrahim </td>
                  <td>{user.email}</td>
                  <td>Admin </td>
                  <td>20-05-23</td>
                  <td>
                    <Link href="/b2bdashboard/b2bagent/add-user/update">
                      <FaEdit size={25}  className="text-[#00ab55]" />
                    </Link>
                  </td>
                  <td>
                    <FaTrashAlt size={25} className="text-red-500" />
                  </td>
                </tr>)
              }
            </tbody>
          </table>
            </div>
        </div>
    );
};

export default AllUsers;