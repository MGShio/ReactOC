import React from "react";
import "./card.sass"
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <Link className="card" to={`/apartment/${id}`}>
      <div className="card__content">
        <h3 className="card__content__title">{title}</h3>
      </div>
      <img className="card__image" src={cover} alt={title} />
    </Link>
  );
}

export default Card;