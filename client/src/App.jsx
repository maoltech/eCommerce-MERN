import Home from './pages/Home';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Success from "./pages/success";
import Failed from "./pages/failed";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = () => {

  const user = useSelector((state) => state.user.currentUser);
  
  return(<Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/products/:category' element={<ProductList />} />
      <Route path='/success' element={<Success />} />
      <Route path='/failed' element={<Failed />} />
    </Routes>
  </Router>)
};

export default App;