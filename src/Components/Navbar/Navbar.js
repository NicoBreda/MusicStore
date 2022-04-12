import './Navbar.css' 
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>MusicStore</h1>
            <button className='boton'>Iniciar sesión</button>
            <a className='pestaña'>COMPRA</a>
            <a className='pestaña'>ALQUILA</a>
            <button className='boton'>Registrate</button>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar

//<i class="bi bi-cart4"> <img src= {'./imagenes/cart4.png'} alt="Cart4"/></i>