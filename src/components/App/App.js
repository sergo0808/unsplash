import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState } from "react";
import * as Fotos from "../../utils/Api";

function App() {
  const [cards, setCards] = useState([]);

  const handleClick = () => {
    Fotos.getFotos().then((data) => {
      setCards(data);
    });
    console.log(cards);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i.liked_by_user === "true");
    Fotos.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header onClick={handleClick} />
      <Main cards={cards} onCardLike={handleCardLike} />
      <Footer />
    </div>
  );
}

export default App;
