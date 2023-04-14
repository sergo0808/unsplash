import React from "react";
import CardsList from "../CardsList/CardsList";
import "./Main.scss";

const Main = ({cards}) => {
  return (
    <main className="main">
      <CardsList cards={cards} />
    </main>
  );
};

export default Main;
