import img from '../../../../public/assets/fruit14.png'
import './Order.css'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const Order = () => {
 
	
    return (
        <div className="mt-10 ">
          <table className="table orderTable overflow-x-auto">
					<tr>
						<th> Order No </th>
						<th> Date  </th>
						<th> Item </th>
						<th> Porduct</th>
						<th> Total </th>
						<th>Mange Order </th>
					</tr>
					<tbody>
						<tr>
                            <td>04748498494944</td>
                            <td>05-05-2023 </td>
							<td>
								<img className="w-[60px]" src={img} alt="fruit" />
							</td>
							<td>
								<b>Beef Potjiekos Per - 500g</b>
							</td>
							<td> $600 </td>
							<td>
                            <ManageAccountsIcon size={25} className='cursor-pointer' />
							</td>
						</tr>
                        <tr>
                            <td>04748498494944</td>
                            <td>05-05-2023 </td>
							<td>
								<img className="w-[60px]" src={img} alt="fruit" />
							</td>
							<td>
								<b>Beef Potjiekos Per - 500g</b>
							</td>
							<td> $600 </td>
							<td>
								<ManageAccountsIcon size={25} className='cursor-pointer' />
							</td>
						</tr>
					</tbody>
				</table>
        </div>
    );
};

export default Order;