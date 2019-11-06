import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(name => {
				//remove names that do not match current filter text
				return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})

			.map(directory => {
			return (
				<tr key={directory.id} 
					onClick = {() =>selectedUpdate(directory.id-1)}>
					<td>{directory.code} </td>
					<td onClick={()=> this.props.onSelectBuilding(directory.id)}> {directory.name} </td>
					<td onClick={()=> this.props.deleteBuilding(directory.id)}><RemoveBuilding></RemoveBuilding>
					</td>
				</tr>
			);
		});

		return (
			<div>
				{/* <p>
					filterText value is: {this.props.filterText}
				</p> */}
				<u1>
					<tbody>{buildingList}</tbody>
				</u1>
			</div>
		); 
	}
}
export default BuilingList;
