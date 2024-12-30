
const product = (props) => {

    const {id,productName,price,productImage}= props.data
    return ( 
        <div className="product">
           <img src={productImage}/>
           <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
               
            </div>
            <button className="addToCart">Add To Cart</button>
        </div>
     );
}
export default product
 