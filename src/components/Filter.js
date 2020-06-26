import React, { Component } from "react";

class Filter extends Component {

  render() {
    return (
      <div  className="filterWrapper" className="ui menu" >
        <label > Show all:</label>
        <input  className="ui toggle checkbox" type='checkbox' onChange={this.props.showAll} />

        <label> Filter By Weight:</label>
        <input className="ui toggle checkbox" type='checkbox' onChange={this.props.sortByWeight} />
        {/* <br /><br /> */}
        <label>  Filter By Name:</label>
        <input className="ui toggle checkbox" type='checkbox' onChange={this.props.sortByName} />
        {/* <br /><br /> */}
        <label>  Filter By Greased:</label>
        <input className="ui toggle checkbox" type='checkbox' onChange={this.props.changeFilter} />
        <br /><br />
      </div>
    )
  }
}
export default Filter;