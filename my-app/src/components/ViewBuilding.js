import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding, data} = this.props
		
		const idList = selectedBuilding.map(id=> {
			const {code, name, coordinates, address} = data[id-1]
			
			return(
				<li key = {id-1}>
				<li key = {id}> Code: {code} </li>
				<li key = {id}> Name: {name} </li>
				<li key = {id} > Coordinates:
					{coordinates &&
					<u1>
						<li>Latitude: {coordinates.latitude} </li>
						<li>Longitude: {coordinates.longitude} </li>
					</u1>
					}
				</li>
				<li key = {id}> Address: {address} </li>
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
