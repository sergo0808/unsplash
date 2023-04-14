import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState } from "react";
import * as Fotos from "../../utils/Api";

function App() {
  const [card, setCard] = useState([]);
  Fotos.getFotos().then((data) => {});

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
