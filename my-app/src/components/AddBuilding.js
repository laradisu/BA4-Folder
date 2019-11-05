import React from 'react';
class AddBuilding extends React.Component {
    render(){
        return(
            <form>
					<input 
						type="text" 
						// ref= { (value) => {this.filterText = value}}
						placeholder="Type to Filter"
						// onChange = {this.filterUpdate.bind(this)} 
					/>
				</form>
        )
    }
}          
export default AddBuilding;