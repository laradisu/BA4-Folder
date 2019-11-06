import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import Table from 'react-bootstrap/Table';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildings: props.data,
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      ...this.state,
      filterText: value
    })
  }
  
  selectedUpdate= id => {
    
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    // const update = this.state.selectedBuilding.concat([id])
    
    this.setState({
      // ...this.state,
      selectedBuilding: id,
    })

  }

  deleteBuilding = id => {
    console.log(this.state.buildings)
    this.setState(state=>{
      var temp = state.buildings;
      for(var i = 0; i<temp.length;i++)
      {
        if(temp[i].id ===id)
        {
          temp.splice(i,1)
        }
      }
      return{
        ...this.state,
        buildings: temp
      }
      })
      
    
    
    console.log(this.state.buildings)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search 
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <Table className ="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.buildings}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    deleteBuilding={this.deleteBuilding}
                    onSelectBuilding={this.selectedUpdate}
                  />
                </Table>
              </div>
            </div>
            
            <div className="column2">
              <ViewBuilding 
              selectedBuilding = {this.state.selectedBuilding}
              data = {this.props.data}
              />
              <AddBuilding/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
