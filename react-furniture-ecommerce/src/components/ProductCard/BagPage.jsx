import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartProvider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../css/bagpage.css";

function BagPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/.product");
    }
  }, [cart, navigate]);

  //   const productId=cart[0]?.id;
  //   const subtotal=cart.filter(item=>item.id===productId)
  //   .reduce((sum,item)=>sum + item.price * item.quantity,0);

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const format = (n) => `MMK ${Number(n).toLocaleString()}`;

  return (
    <div className="bag-container">
      <div style={{ padding: "2rem" }} className="bag-page">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{format(item.price)}</td>
                <td>{item.quantity}</td>
                <td>{format(item.price * item.quantity)}</td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-price">
        <h2>Cart Totals</h2>

        <div className="subtotal">
          {Array.from(new Set(cart.map((item) => item.id))).map((productId) => {
            const productSubtotal = cart
              .filter((item) => item.id === productId)
              .reduce((sum, item) => sum + item.price * item.quantity, 0);
            const productName = cart.find(
              (item) => item.id === productId
            )?.name;
            return (
              <div key={productId} className="subtotal-info">
                <p> {productName} </p>
                <p> {format(productSubtotal)} </p>
              </div>
            );
          })}
        </div>

        <div className="alltotal">
          <label>Total</label>
          <div>{format(total)}</div>
        </div>

        <button onClick={() => navigate("/.checkout")}>Check Out</button>
      </div>
    </div>
  );
}

export default BagPage;
