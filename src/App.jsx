import React, { Component, useState } from "react"
import "./App.css"
import Search from "./component/search"
import Filtervalue from "./component/Filtervalue"

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      searchFiled: "",
    }
  }

  //fetch data form api
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { pokemon: data.results }
        })
      )
  }
  //search function
  search = (event) => {
    const serval = event.target.value //type or search  event can get
    this.setState(() => {
      return { searchFiled: serval.toLowerCase() }
    })
  }

  render() {
    const filtteredValue = this.state.pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.state.searchFiled)
    })

    return (
      <>
        <body >
          
              <Search search={this.search} />

              <Filtervalue filtervlaues={filtteredValue} />
            
        </body>
      </>
    )
  }
}

export default App
