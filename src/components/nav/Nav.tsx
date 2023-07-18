import { Link } from "react-router-dom"
import "./nav.css"

function Nav(){
    return(
        <nav>
            <input type="checkbox" id="toggle" />
            <div className="logo">
                <Link to="/">
                    <ul>
                        <li><img className="img-s" src="/src/assets/compra16.png"></img></li>
                        <li>E-commerce</li>
                    </ul>
                </Link>
                
            </div>
                <ul className="list">
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/categories"}>Categorías</Link></li>
                                        <li><Link to={"/products"}>Productos</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                    <li><img className="img-s" src="/src/assets/compra14.png"  width="35" height="35"></img></li>
                    
                </ul>
                <label htmlFor="toggle" className="icon-bars">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>                   
                </label>            
        </nav>
        
    )
}

export default Nav