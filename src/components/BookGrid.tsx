import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

const BookGrid: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <BookCard
              title={book.title}
              author={book.author}
              price={book.price}
              onAddToCart={() => alert(`Added ${book.title} to cart`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
