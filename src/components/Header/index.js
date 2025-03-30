import './header.css'
import { Link } from 'react-router-dom'


export default function Header() {
 return (
   <div>
        <header>
            <Link className='logo' to='/'>Prime Flix</Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
        </header>
   </div>
 );
}