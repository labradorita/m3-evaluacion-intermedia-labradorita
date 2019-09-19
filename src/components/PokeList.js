import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    const listPokemons = this.props.listPokemons.map(pokemon => {
      return (
        <li key={pokemon.id} className="item">
          <Pokemon
            //key={pokemon.id}
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            listPokemons={this.props.listPokemons}
          />
        </li>
      );
    });
    return <ul className="listPoke">{listPokemons}</ul>;
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};

export default PokeList;
