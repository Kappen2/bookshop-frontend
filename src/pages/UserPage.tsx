// UserPage.tsx
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import DataTable from "../components/DataTable";
import { useUser } from "./UserContext";
import axios from "axios";

const UserPage: React.FC = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<any>(null);

  const handleLoginSuccess = async (userId: number) => {
    console.log(`User ${userId} logged in`);
    try {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
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
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          {userData && <DataTable data={userData} />}
        </div>
      ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default UserPage;
