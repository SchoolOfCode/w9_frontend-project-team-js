import { slide as Menu } from 'react-burger-menu'



function Hamburger () {

    <Menu width={ '20%' } isOpen={ true } customBurgerIcon={ <img src="img/icon.svg" /> }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
}

export default Hamburger
