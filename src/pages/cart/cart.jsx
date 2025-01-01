import PRODUCTS from "../../products"
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItems } from "./cart-item";
import "./cartItem.css"

// import Product from "./productProps"
const Cart = ()=>{
        const {cartItems}= useContext(ShopContext) ;
    
    return(
        <div className="cart">
            <div>
                <h1>You Cart Items</h1>
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
        </div>
    )
}
export default Cart;

