import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Container from "./Container"
import Filter from './Filter'
class App extends Component {

  state = {
    hogs: hogs,
    filter: false,
    byName: false,
    byWeight: false
  }

  changeFilter = () => {
    this.setState(previousState => {
      return { filter: !previousState.filter }
    })
    // this.setState({filter: !this.state.filter})  
  }

  sortByName = () => {
    this.setState({byName: !this.state.byName})
  }

  sortByWeight = () => {
    this.setState({byWeight: !this.state.byWeight})
  }

  filteredByGreased = (hogsArray) => {
    if (this.state.filter) {
      return hogsArray.filter(hog => hog.greased === this.state.filter)
    } else {
      return hogsArray
    }
  }

  filteredByName = (hogsArray) => {
    if (this.state.byName) {
      return [...hogsArray].sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else {
      return hogsArray
    }
  }

  filteredByWeight = (hogsArray) => {
    if (this.state.byName) {
      return [...hogsArray].sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    } else {
      return hogsArray
    }
  }

  hogsToRender = () => {
    const nameFiltered = this.filteredByName(this.state.hogs)
    const greaseFiltered = this.filteredByGreased(nameFiltered)
    const weightFiltered = this.filteredByWeight(greaseFiltered)
    return weightFiltered
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter changeFilter={this.changeFilter} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        <Container hogs={this.hogsToRender()} />
      </div>
    );
  }
}
export default App;