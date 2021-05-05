import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Card extends Component {
  render() {
    const { name, image, id } = this.props;
    return (
      <Link className="card" to={`/entry/${id}`}>
        <img
          width="200"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={name}
        />
        <h3>{name}</h3>
      </Link>
    );
  }
}

export default Card;
