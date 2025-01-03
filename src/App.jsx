import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Shop from "./pages/shop/shop"
import Cart from "./pages/cart/cart"
import "./App.css"
import { ShopContextProvider } from "./context/shop-context";


const App = ()=>{
  return(
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
           </Routes>

        </Router>
        </ShopContextProvider>  
       
    </div>
  )
}

export default App;