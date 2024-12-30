import PRODUCTS from "../../products"
import product from "./product";
import Product from "./product"
import "./product.css"
import "./shop.css"

const Shop = () => {
    return ( 
        <div className="shop">
            <div className="shopTitle"> 
                <h1>Everything Home</h1>
            </div>
            <div className="products" key={product.id}>
                {PRODUCTS.map((product)=>{
                    return (
                        <Product data={product}/>
                    )
                })}

            </div>
        </div>
     );
}
 
export default Shop;