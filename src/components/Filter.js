import React, { Component } from "react";

class Filter extends Component {

  render() {
    return (
      <div >
        <label> Show all:</label>
        <input type='checkbox' onChange={this.props.showAll} />

        <label> Filter By Weight:</label>
        <input type='checkbox' onChange={this.props.sortByWeight} />
        {/* <br /><br /> */}
        <label>  Filter By Name:</label>
        <input type='checkbox' onChange={this.props.sortByName} />
        {/* <br /><br /> */}
        <label>  Filter By Greased:</label>
        <input type='checkbox' onChange={this.props.changeFilter} />
        <br /><br />
      </div>
    )
  }
}
export default Filter;