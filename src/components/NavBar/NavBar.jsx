import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1 style={{color:"red"}}> Marolio Online</h1>

        <nav>
            <ul>
                <li>Lacteos</li>
                <li>Bebidas</li>
                <li>Almacen</li>
            </ul>
        </nav>

        <CartWidget />
      
    </header>
  )
}

export default NavBar
