import { Link } from 'react-router-dom'
import './notFound.css'

export default function NotFound() {
 return (
   <div className="notFound">
        <h1>404</h1>
        <h2>Pagina nao encontrada!</h2>
        <Link to='/' >Ir para pagina principal</Link>
   </div>
 );
}