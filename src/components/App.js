import React from "react";
import PokeList from "./PokeList";
import pokemonsData from "../data/data.json";
import "../stylesheets/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsData
    };
  }
  render() {
    const listPokemons = this.state.pokemons;
    console.log(listPokemons);
    return (
      <div>
        <header className="header">
          <h1 className="title">Mi lista de Pokemon</h1>
        </header>
        <main className="main">
          <PokeList listPokemons={listPokemons} />
        </main>
      </div>
    );
  }
}

export default App;
