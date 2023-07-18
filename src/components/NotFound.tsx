import { Link } from "react-router-dom"
import notFound from "../assets/404.jpg"

function NotFound(){
    return(
        <div className="not-found">
            <h2>La página que ha solicitado no se encuentra disponible.</h2>
            <Link to="/">Volver</Link>
            <img src={notFound} alt="not-found" />            
        </div>
    )
}

export default NotFound