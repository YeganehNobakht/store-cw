import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux"
import "./style.css"
const Header = ({showModal,setShowModal}) => {
const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)
return (
<div className="header">
<a href="#" className="p-4">store</a>
<a href="#" className="p-4">about</a>
<button onClick={()=> setShowModal(!showModal)}><FaShoppingCart/>cart ({totalQuantity})</button>
<div>
    <h1>Store</h1>
    <p>This is a store page</p>
</div>
</div>
)
}

export default Header;