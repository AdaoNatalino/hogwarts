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
    byWeight: false,
    backUp: hogs
  }

  hideHog = (hog) => {
    const arrayToRender = this.state.hogs.filter(obj => obj.name !== hog.name)
    this.setState({hogs: arrayToRender})
  }

  showAll = () => {
    this.setState({hogs: this.state.backUp})
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
    if (this.state.byWeight) {
      return [...hogsArray].sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    } else {
      return hogsArray
    }
  }

  hogsToRender = () => {
    const nameFiltered = this.filteredByName(this.state.hogs)
    const greaseFiltered = this.filteredByGreased(nameFiltered)
    const weightFiltered = this.filteredByWeight(greaseFiltered)
    // debugger
    return weightFiltered
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter changeFilter={this.changeFilter} showAll={this.showAll}
        sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        <Container hogs={this.hogsToRender()} hideHog={this.hideHog} />
      </div>
    );
  }
}
export default App;