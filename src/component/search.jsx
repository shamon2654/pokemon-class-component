import React, { Component } from "react"
import "./search.css"

export class Search extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="search">
        <input
          type="search"
          onChange={this.props.search}
          placeholder="search pokemon name"
        />
      </div>
    )
  }
}

export default Search
