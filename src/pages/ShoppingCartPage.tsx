import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import DataTable from "../components/DataTable";
import Button from "../components/Button"; // Import the Button component
import { useUser } from "./UserContext";
import axios from "axios";

interface ShoppingCart {
  price: number;
  bookOrders: { title: string; author: string; price: number }[];
}

const ShoppingCartPage: React.FC = () => {
  const { user } = useUser();
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);

  const handleLoginSuccess = async (userId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/shopping-carts/user/${userId}`
      );
      console.log("Response data:", response.data);
      if (response.status === 200) {
        setShoppingCart(response.data);
      } else {
        alert("Shopping cart not found for the user.");
      }
    } catch (error) {
      console.error("Error fetching shopping cart:", error);
    }
  };

  useEffect(() => {
    if (user) {
      handleLoginSuccess(user.id);
    }
  }, [user]);

  const handleCheckout = async () => {
    try {
      if (user) {
        // Check if user is not null
        const response = await axios.delete(
          `http://localhost:8080/shopping-carts/checkout/${user.id}`
        );
        alert(response.data);
        // Optionally, you can update the shopping cart state or perform any other action after successful checkout
      } else {
        // Handle the case when user is null
        console.error("User is null. Unable to checkout shopping cart.");
      }
    } catch (error) {
      console.error("Error checking out shopping cart:", error);
    }
  };

  return (
    <div>
      <NavBar />
      {shoppingCart ? (
        <div>
          <h2>Your Shopping Cart</h2>
          <p>Price: {shoppingCart.price}</p>
          <DataTable data={shoppingCart.bookOrders} />
          {user && (
            <Button onClick={handleCheckout}>Checkout</Button> // Render the button only if the user is logged in
          )}
        </div>
      ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default ShoppingCartPage;
