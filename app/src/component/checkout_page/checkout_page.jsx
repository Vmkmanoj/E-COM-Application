import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './checkout.css';

function Checkout() {
  const { gettotalAmount } = useContext(ShopContext);

  const handlePayment = (e) => {
    e.preventDefault();
  
    const amount = gettotalAmount();
    if (amount === 0) {
      alert("Any product are not selected");
    } else {
      const options = {
        key: "rzp_test_AQcWvXY8SA8Atg",
        key_secret:"1WMZLTjpgygf6r5ZczGkt1YN", // Replace with your Razorpay API key
        amount: amount * 100, // Razorpay expects amount in paisa
        currency: "INR",
        name: "Your Store Name",
        description: "Purchase description",
        image: "https://your-website.com/logo.png", // Your store logo
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          // Handle success - you might want to update your UI or redirect to a success page
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "Customer Phone Number",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };
  

  return (
    <div className="all_chackdiv">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="address">Address:</label><br />
        <textarea id="address" name="address" rows="4" required></textarea><br /><br />

        <label htmlFor="card_number">Credit Card Number:</label><br />
        <input type="text" id="card_number" name="card_number" required /><br /><br />

        <label htmlFor="expiry_date">Expiry Date:</label><br />
        <input type="text" id="expiry_date" name="expiry_date" placeholder="MM/YY" required /><br /><br />

        <label htmlFor="cvv">CVV:</label><br />
        <input type="text" id="cvv" name="cvv" required /><br /><br />

        <button className="button1" onClick={handlePayment}>PAYMENT</button>
      </form>
    </div>
  );
}

export default Checkout;






/// key: "rzp_test_AQcWvXY8SA8Atg",
///key_secret:"1WMZLTjpgygf6r5ZczGkt1YN",