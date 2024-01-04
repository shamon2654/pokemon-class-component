import React, { Component } from "react"
import "./Filtervalue.css"

export class Filtervalue extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {this.props.filtervlaues.map((value, index) => {
          const index1 = index

          return (
            <div className="card">
              <div className="card1">
                <div className="item">
                  {/* images from link */}

                  {
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                        index1 + 1
                      }.png`}
                      alt="no image"
                    />
                  }

                  <h1>{value.name}</h1>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Filtervalue
