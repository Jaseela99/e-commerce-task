
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/> 
        <Route path="/cart" element={<CartPage/>}/> 
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
