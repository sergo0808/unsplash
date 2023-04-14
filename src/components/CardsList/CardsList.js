import React from "react";
import "./CardsList.scss";
import Card from "../Card/Card";

const CardsList = ({cards}) => {
  return (
    <section className="CardsList">
      {cards.map((card) =>{
        <Card />

      })}
      
    </section>
  );
};

export default CardsList;
