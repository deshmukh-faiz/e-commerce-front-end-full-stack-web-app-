import './App.css';
import Header2 from './component/Header2';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import BuyNow from './component/BuyNow';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      img: './images/category/M.JPG',
      name: 'Phones company',
      category: 'Phones',
      seller: 'AMZ Seller Ghz',
      price: 3
    },
    {
      img: './images/category/c7.png',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'Watch Ltd Siyana',
      price: 3
    },
    {
      img: './images/category/blue.jpg',
      name: 'Blue tooth',
      category: 'electronics',
      seller: 'Delhi Laptops',
      price: 5
    },
    {
      img: './images/category/m3.JPG',
      name: 'Phones company',
      category: 'Phones',
      seller: 'Camron LTD',
      price: 3
    },
    {
      img: './images/category/tv.JPG',
      name: 'TV',
      category: 'TV',
      seller: 'Watch Ltd',
      price: 3
    },
    {
      img: './images/category/wrench.JPG',
      name: 'wrench',
      category: 'wrench',
      seller: 'ABS Ltd',
      price: 3
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    const existingProductIndex = cart.findIndex((item) => item.name === data.name);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  }
  

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header2 count={cart.length}
        handleShow={handleShow} ></Header2>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
   
         

    </div>
  );
}

export default App;