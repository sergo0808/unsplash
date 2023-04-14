import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <article className="card">
      <h3 className="card__name"></h3>
      <p className="card__duration"></p>
      <button></button>
      <a href="" className="card__link-trailer" target="_blank" rel="noreferrer">
        <img className="card__image" alt="картинка фильма" />
      </a>
    </article>
  );
};

export default Card;
