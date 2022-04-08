import './Navbar.css' 

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>MusicStore</h1>
            <button className='boton'>Iniciar sesión</button>
            <a className='pestaña'>COMPRA</a>
            <a className='pestaña'>ALQUILA</a>
            <button className='boton'>Registrate</button>
            
        </nav>
    )
}

export default Navbar