import React from "react";
import "./CardsList.scss";
import Card from "../Card/Card";

const CardsList = ({ cards }) => {
  return (
    <section className="CardsList">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.user.name}
          duration={card.created_at}
          img={card.urls.small}
        />
      ))}
    </section>
  );
};

export default CardsList;
