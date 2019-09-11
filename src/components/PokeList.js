import React from "react";
import Card from "./Pokemon.js";

class List extends React.Component {
  render() {
    const { listPokemons } = this.props;
    return (
      <ul className="listPoke">
        {listPokemons.map(function(pokemon) {
          return (
            <li key={pokemon.id} className="item">
              <Card name={pokemon.name} url={pokemon.url} types={pokemon.types} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
