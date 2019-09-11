import React from "react";

class Card extends React.Component {
  render() {
    const { name, url, types } = this.props;
    return (
      <div className="card">
        <img className="img" src={url} alt={name} />
        <h2 className="title">{name}</h2>
        <ul className="types">
          {types.map((type, id) => {
            return (
              <li className="type" key={id}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Card;
