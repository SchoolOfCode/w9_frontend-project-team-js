import "./index.css";
import { slide as Menu } from "react-burger-menu";

function Header() {
  return (
    <header className="header1">
      <div className="menu-div">
        <Menu
          left
          customBurgerIcon={
            <img
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-pencil-case-back-to-school-justicon-lineal-color-justicon.png"
              alt="Pencil button"
            />
          }
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="Skills" className="menu-item" href="/about">
            Skills
          </a>
          <a id="Goals" className="menu-item" href="/contact">
            Goals
          </a>
        </Menu>
      </div>
      <div className="logo-container">
        <img
          className="logo"
          src={require("../../design-files/backpack.png")}
          alt="Backpack"
        />

        <h1 className="header-title">Backpack</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
