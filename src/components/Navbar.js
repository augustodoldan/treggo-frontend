import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar=()=>{

    return (
        <nav id="navbar_container">
        <div className='navbar_links'>
        <Link to='/' className='navbar_link'>Home</Link>
        <Link to='/' className='navbar_link'>Buscar personajes</Link>
        <Link to='/planet/:id' className='navbar_link'>Planetas</Link>
        <Link to="/film/:id" className='navbar_link'>Películas</Link>
        </div>
        </nav>
    )
}

export default Navbar