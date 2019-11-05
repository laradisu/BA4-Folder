import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding, data} = this.props
		// console.log(selectedBuilding);
		
		const idList = selectedBuilding.map(id=> {
			const {code, name, coordinates, address} = data[id-1]
			
			return(
				<li key = {id-1}>
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
	})

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					{idList}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
