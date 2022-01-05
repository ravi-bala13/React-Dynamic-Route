import {Link} from "react-router-dom"

export const Navbar = () => {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/products" style={{margin:"20px"}}>All Products</Link>
    </div>
}