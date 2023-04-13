import React from "react";
import headerLogo from "../../images/unsplash-seeklogo.com-2.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </a>
      <button className="header__button ">Загрузить</button>
    </header>
  );
}

export default Header;
