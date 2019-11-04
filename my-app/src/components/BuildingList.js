import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;

		const buildingList = data
			.filter(name => {
				//remove names that do not match current filter text
				return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return (
			<div>
				<p>
					filterText value is: {this.props.filterText}
				</p>
				<u1>
					{buildingList}
				</u1>
			</div>
		); 
	}
}
export default BuilingList;
