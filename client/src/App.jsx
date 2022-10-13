import Home from './pages/Home';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


const App = () => {
  const user = false; 
  return(<Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/products/:category' element={<ProductList />} />
    </Routes>
  </Router>)
};

export default App;