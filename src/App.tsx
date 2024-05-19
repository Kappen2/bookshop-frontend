import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import UserPage from "./pages/UserPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { UserProvider } from "./pages/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
