import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const ShoppingCartPage: React.FC = () => {
  const handleLoginSuccess = (userId: number) => {
    console.log(`User ${userId} logged in`);
    // Add any additional logic for what should happen after a successful login
  };

  return (
    <div>
      <NavBar />
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default ShoppingCartPage;
