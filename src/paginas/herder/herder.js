import { Link } from "react-router-dom"
import './herder.css'
const Header = () =>{
    return (
        <main className="container">
            <h1>Divulgação Netflix</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/imagens">Imagens</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
</main>
    )
}
export default Header;