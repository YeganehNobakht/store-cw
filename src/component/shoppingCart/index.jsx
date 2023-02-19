
import { useSelector } from "react-redux";
import Product from "./product";
import "./style.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
const ShoppingCart = () => {

    const { cartItems, cartTotalQuantity, cartTotalPrice } = useSelector((state) =>
        state.cart
    )


    return (
        <>
            <div className="cart text-center mt-5">
                <h1>Cart</h1>
                <p>This is the Cart Page.</p>
            </div>
            <div className="row no-gutters justify-content-center">

                <div className="col-sm-9 p-3">
                    <div className="p-3 text-center text-muted">
                        {
                            cartItems.length > 0 ? cartItems.map((product) => <Product key={product.id} product={product} />) : "Your cart is empty"
                        }

                    </div>
                </div>

                <div className="col-sm-3 p-3">
                    <div className="card card-body">
                        <p className="mb-1">Total Items</p>
                        <h4 className=" mb-3 txt-right">{cartTotalQuantity}</h4>
                        <p className="mb-1">Total Payment</p>
                        <h3 className="m-0 txt-right">${cartTotalPrice}</h3>
                        <hr className="my-4" />
                        <div className="text-center">
                            <button type="button" class="btn btn-primary mb-2">
                                CHECKOUT
                            </button>
                            <button type="button" class="btn btn-outlineprimary btn-sm">
                                CLEAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoppingCart;