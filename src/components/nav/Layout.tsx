import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function Layaout(){
    return(
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}

export default Layaout