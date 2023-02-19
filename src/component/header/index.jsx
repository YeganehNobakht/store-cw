import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux"
import "./style.css"
const Header = ({showCart,setShowCart}) => {
const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)
return (
<div className="header">
<button onClick={()=> setShowCart(!showCart)}  className="p-4">store</button>
<button  className="p-4">about</button>
<button onClick={()=> setShowCart(!showCart)}><FaShoppingCart/>cart ({totalQuantity})</button>
<div>
    <h1>Store</h1>
    <p>This is a store page</p>
</div>
</div>
)
}

export default Header;