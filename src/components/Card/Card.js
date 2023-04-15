import React from "react";
import "./Card.scss";

const Card = ({ card, name, duration, img, onCardLike }) => {
  const isLiked = Object.entries(card).some((i) => i.liked_by_user === "true");
  const cardLikeButtonClassName = `element__group-like ${isLiked && "element__group-like_active "}`;

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <article className="card">
      <h3 className="card__name">{name}</h3>
      <p className="card__duration">{duration}</p>
      <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
      <img className="card__image" alt="картинка фильма" src={img} />
    </article>
  );
};

export default Card;
