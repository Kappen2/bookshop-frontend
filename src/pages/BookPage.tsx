import React from "react";
import NavBar from "../components/NavBar";
import BookGrid from "../components/BookGrid";

const BookPage: React.FC = () => {
  return (
    <div>
      <NavBar></NavBar>
      <BookGrid></BookGrid>
    </div>
  );
};

export default BookPage;
