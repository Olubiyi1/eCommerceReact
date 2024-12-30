import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Shop from "./pages/shop/shop"
import Cart from "./pages/cart/cart"
import "./App.css"


const App = ()=>{
  return(
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

      </Router>
       
    </div>
  )
}

export default App;