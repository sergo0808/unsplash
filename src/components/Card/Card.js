import React from "react";
import "./Card.scss";

const Card = ({ name, duration, img }) => {
  return (
    <article className="card">
      <h3 className="card__name">{name}</h3>
      <p className="card__duration">{duration}</p>
      <img className="card__image" alt="картинка фильма" src={img} />
    </article>
  );
};

export default Card;
