import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import DataTable from "../components/DataTable";
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

  return (
    <div>
      <NavBar />
      {shoppingCart ? (
        <div>
          <h2>Your Shopping Cart</h2>
          <p>Price: {shoppingCart.price}</p>
          <DataTable data={shoppingCart.bookOrders} />
        </div>
      ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default ShoppingCartPage;
