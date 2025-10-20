import React, { use } from 'react'
import { useEffect } from 'react';
import '../css/order.css'
function Order() {

    const [orders, setOrders] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        // Fetch orders data from an API or local JSON file
        fetch('/orders.json')
          .then(response => response.json())
          .then(data => {
            // Handle the fetched data
            setOrders(data);
            setLoading(false);
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching orders data:', error);
          });
    }, []);

    if (loading) {
        return <p>Loading Orders...</p>;
    }
  return (
    <>
    <div className="order-header">
        <div className="order-header-left">
            <h2 style={{margin:0}}>Orders History</h2>
     <p>Here is a list of all orders</p>
        </div>
        <div className="order-header-right">
            <button className='ad-btn ad-btn-primary'>
                <i class="fa-solid fa-download"></i>  Download Report
            </button>
        </div>
        
    </div>
    
      <div className="order-container">
        <table>
            <thead>
                <tr>
                    <th>ORDER ID</th>
                    <th>CUSTOMER</th>
                    <th>PRODUCT</th>
                    <th>QUANTITY</th>
                  
                    <th>TOTAL</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
               {orders.map((order) => (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.total}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                </tr>
               ))}
            </tbody>
        </table>

      </div>
    
    </>
  )
}

export default Order