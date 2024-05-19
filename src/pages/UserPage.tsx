import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import { useUser } from "./UserContext";

const UserPage: React.FC = () => {
  const { user } = useUser();

  const handleLoginSuccess = (userId: number) => {
    console.log(`User ${userId} logged in`);
    // Fetch and display user information or navigate to another page
  };

  return (
    <div>
      <NavBar />
      {user ? (
        <div>Welcome, {user.username}</div>
      ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default UserPage;
