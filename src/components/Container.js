import React, { Component } from "react";
import Hog from './Hog';
class Container extends Component {
  
    renderHogs = () =>  this.props.hogs.map(hog => < Hog hog={hog} /> ) 

  render() {
    return (
      <div className="ui grid container">
          {this.renderHogs()}
      </div>
    );
  }
}
export default Container;