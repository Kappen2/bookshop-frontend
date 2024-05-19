import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import LoginForm from "./LoginForm";
import { useUser } from "../pages/UserContext";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

const BookGrid: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const { user } = useUser();

  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((response) => {
        const booksWithImages = response.data.map((book: Book) => ({
          ...book,
          image: getBookImage(book.title),
        }));
        setBooks(booksWithImages);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const getBookImage = (title: string): string => {
    const bookImages: { [key: string]: string } = {
      "1984": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      "Animal Farm": "https://covers.openlibrary.org/b/id/7942071-L.jpg",
      "To Kill a Mockingbird":
        "https://covers.openlibrary.org/b/id/8305831-L.jpg",
      // Add other book images here...
    };

    return bookImages[title] || "/TestBook.jpg";
  };

  const handleAddToCart = (bookId: number) => {
    setSelectedBookId(bookId);
    setShowLoginForm(true);
  };

  const handleLoginSuccess = (userId: number) => {
    console.log(
      "Login successful, creating book order with bookId and userId:",
      selectedBookId,
      userId
    );
    if (selectedBookId !== null) {
      createBookOrder(selectedBookId, userId);
    }
    setShowLoginForm(false);
  };

  const createBookOrder = async (bookId: number, userId: number) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/book-orders/add",
        { bookId, shoppingCartId: userId }
      );
      if (response.status === 201) {
        alert("Order created successfully!");
      } else {
        alert(`Failed to create order: ${response.statusText}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error creating order:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error creating order:", error);
      }
    }
  };

  return (
    <div className="container text-center">
      {showLoginForm ? (
        <LoginForm onSuccess={handleLoginSuccess} />
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <BookCard
                title={book.title}
                author={book.author}
                price={book.price}
                image={book.image}
                onAddToCart={() => handleAddToCart(book.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookGrid;
