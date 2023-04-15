import React from "react";
import "./CardsList.scss";
import Card from "../Card/Card";

const CardsList = ({ cards }, props) => {
  return (
    <section className="CardsList">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          name={card.user.name}
          duration={card.created_at}
          img={card.urls.small}
          onCardLike={props.onCardLike}
        />
      ))}
    </section>
  );
};

export default CardsList;
