import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/pokemon.css";

class Pokemon extends React.Component {
  render() {
    const { name, url, key } = this.props;
    return (
      <div className="card">
        <img className="img" src={url} alt={name} />
        <h2 className="titleCard">{name}</h2>
        <ul className="types">
          {this.props.types.map(type => {
            return (
              <li className="type" key={key}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.number
};

export default Pokemon;
