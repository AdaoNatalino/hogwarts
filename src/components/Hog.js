import React, { Component } from "react";
class Hog extends Component {
  state = {
    show: false,
    hide: false
  }

  hideButton = (hog) => { 
    this.setState({hide: !this.state.hide})
    this.props.hideHog(hog)
  }

  showDetails = () => {
    this.setState(previousState => {
      return { show: !previousState.show }
    })
    // this.setState({ show: !this.state.show})
  }
  render() {
    const hog = this.props.hog
    const pigAddress = hog.name.toLowerCase().split(' ').join('_')
    let pigImage = require(`../hog-imgs/${pigAddress}.jpg`)
    return (
      <div className="ui card eight wide column pigTile" >
        <h4 className="content" className="header"> {hog.name} </h4>
        <button className="ui button" onClick={() => this.hideButton(hog)}>Hide Hog</button>
        <div><img src={pigImage} alt=" " className="image"/></div>
        {this.state.show ?
          <div className="description" >
            <h3 > Specialty: {hog.specialty} </h3>
            <h3> {hog.weight} Kg </h3>
            <h3> {hog.greased ? "Greased" : "Not Greased"} </h3>
            <h3> High Medal Achieved: {hog[`highest medal achieved`]} </h3>
            <button className="ui button" onClick={this.showDetails}> Click to hide details! </button>
          </div>
          : <button className="ui button" onClick={this.showDetails}>Click for Details! </button>}
      </div>
    );
  }
}
export default Hog;