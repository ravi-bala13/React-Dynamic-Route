
import './App.css'

import {Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import {Home} from "./components/Home"
import { AllProducts } from './components/AllProducts';
import {Product} from "./components/Product"

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
      {/* <Home></Home> */}
    </div>
  )
}

export default App
