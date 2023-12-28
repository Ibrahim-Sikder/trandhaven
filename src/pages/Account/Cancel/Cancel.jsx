import img from '../../../../public/assets/fruit14.png'
import '../Order/Order.css'
const Cancel = () => {
 
	
    return (
        <div className="mt-10 ml-3">
          <table className="table orderTable ">
					<tr>
						<th> Item </th>
						<th> Porduct</th>
						<th> Quantity </th>
						<th> Order </th>
					</tr>
					<tbody>
						<tr>
							<td>
								<img className="w-[60px]" src={img} alt="fruit" />
							</td>
							<td>
								<b>Beef Potjiekos Per - 500g</b>
							</td>
							<td> 03 </td>
							<td>
                            <button className="btn btn-active btn-ghost">Cancel</button>
							</td>
						</tr>
					</tbody>
				</table>
        </div>
    );
};

export default Cancel;