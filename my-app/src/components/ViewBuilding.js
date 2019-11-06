import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding, data} = this.props
		//console.log(selectedBuilding);
		
		// const idList = data[selectedBuilding].map(id=> {
			const {code, name, coordinates, address} = data[selectedBuilding];
			
			const building = (
				<li key = {selectedBuilding}>
				<li> Code: {code} </li>
				<li> Name: {name} </li>
				<li> Coordinates:
					{coordinates &&
					<u1>
						<li>Latitude: {coordinates.latitude} </li>
						<li>Longitude: {coordinates.longitude} </li>
					</u1>
					}
				</li>
				<li> Address: {address} </li>
			</li>
			)
			//console.log(building.key);

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					{building}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
