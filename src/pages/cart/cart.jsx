import PRODUCTS from "../../products"
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItems } from "./cart-item";
import "./cartItem.css"
import "./cart.css"
import { useNavigate } from "react-router-dom";

// import Product from "./productProps"
const Cart = ()=>{
        const {cartItems,getTotalAmount}= useContext(ShopContext) ;
        const totalAmount =  getTotalAmount()
        const navigate = useNavigate()
    
    return(
        <div className="cart">
            <div className="title">
                <h1>Your Cart Items</h1>
            </div>

            <div className="cardItems">
            {PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !== 0){
                        return(
                            <CartItems data={product}/>
                        )
                    }
                })}
            </div>
            {totalAmount > 0?    
            <div className="checkout">
                
                <p><b>Subtotal:${totalAmount}</b></p>
                <div className="buttons">
                    <button onClick={()=>navigate("/")}>Continue Shopping</button>
                    <button> Checkout </button>
                </div>
            </div>
            : <h1>Your Cart is Empty</h1>}
        </div>
    )
}
export default Cart;

