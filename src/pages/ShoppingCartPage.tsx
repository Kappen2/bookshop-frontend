import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import axios from "axios";

interface ShoppingCart {
  price: number;
  items: any[]; // Replace with actual type if known
  // Add any other fields that ShoppingCart contains
}

const ShoppingCartPage: React.FC = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);

  const handleLoginSuccess = async (userId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/shopping-carts/user/${userId}`
      );
      if (response.status === 200) {
        setShoppingCart(response.data);
      } else {
        alert("Shopping cart not found for the user.");
      }
    } catch (error) {
      console.error("Error fetching shopping cart:", error);
    }
  };

  return (
    <div>
      <NavBar />
      {shoppingCart ? (
        <div>
          <h2>Your Shopping Cart</h2>
          <p>Price: {shoppingCart.price}</p>
          <ul>
            {shoppingCart.items.map((item, index) => (
              <li key={index}>
                {item.name}: {item.quantity} @ {item.price}
              </li>
            ))}
          </ul>
          {/* Render other shopping cart details here */}
        </div>
      ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default ShoppingCartPage;
