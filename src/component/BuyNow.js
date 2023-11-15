import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setCART(cart);
    }
  }, [cart]);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          {CART?.map((cartItem, cartindex) => {
            return (
              <div key={cartindex} className="mb-3">
                <img src={cartItem.img} width={80} alt={cartItem.name} />
                <span> {cartItem.name} </span>
                <button
                  className="btn btn-primary text-white"
                  type="button"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  <i className="bi bi-dash-lg"></i>
                </button>
                <span> {cartItem.quantity} </span>
                <button
                  className="btn btn-primary text-white"
                  type="button"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
                <span> Rs. {cartItem.price * cartItem.quantity} </span>
              </div>
            );
          })}

          <div className="d-flex justify-content-between">
            <p>
              Total:{" "}
              <span>
                {CART.map((item) => item.price * item.quantity).reduce(
                  (total, value) => total + value,
                  0
                )}
              </span>
            </p>

            <Link to="/BuyNow" className="btn btn-dark">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
