import React, { Component } from "react";
class Hog extends Component {
  state = {
    show: false
  }
  
  changeHogState = (e) => {
    this.setState(previousState => {
      return { show: !previousState.show }
    })
    // this.setState({ show: !this.state.show})
  }
  render() {
    const hog = this.props.hog
    const pigAddress = hog.name.toLowerCase().split(' ').join('_')
    let pigImage = require(`../hog-imgs/${pigAddress}.jpg`)
    //  debugger
    return (
      <div className="ui eight wide column" >
        <h4> {hog.name} </h4>
        <img src={pigImage} alt=" " onClick={this.changeHogState} />
        {this.state.show ?
          <div>
            <h3> Specialty: {hog.specialty} </h3>
            <h3> {hog.weight} Kg </h3>
            <h3> {hog.greased ? "Greased" : "Not Greased"} </h3>
            <h3> High Medal Achieved: {hog[`highest medal achieved`]} </h3>
          </div>
          : <h3>Click for Details! </h3>}
      </div>
    );
  }
}
export default Hog;