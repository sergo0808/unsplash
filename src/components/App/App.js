import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState } from "react";
import * as Fotos from "../../utils/Api";

function App() {
  const [cards, setCards] = useState([]); 

  const handleClick = () => {
    Fotos.getFotos().then((data) => {setCards(data)});
    console.log(cards)

  }



  return (
    <div className="App">
      <Header onClick ={handleClick}/>
      <Main cards={cards}/>
      <Footer />
    </div>
  );
}

export default App;
