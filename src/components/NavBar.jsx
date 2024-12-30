import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
import "./NavBar.css"

const Nav = () => {
    return ( 
        <div className="navBar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart"><ShoppingCart size={30} color="white"/></Link>
            </div>
        </div>
     );
}
 
export default Nav;