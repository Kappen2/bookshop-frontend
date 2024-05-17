import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const UserPage: React.FC = () => {
  return (
    <div>
      <NavBar></NavBar>
      <LoginForm></LoginForm>
    </div>
  );
};

export default UserPage;
