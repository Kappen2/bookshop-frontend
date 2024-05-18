import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

const BookGrid: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

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
      "Go Set a Watchman": "https://covers.openlibrary.org/b/id/8282413-L.jpg",
      "Pride and Prejudice":
        "https://covers.openlibrary.org/b/id/8231820-L.jpg",
      "Sense and Sensibility":
        "https://covers.openlibrary.org/b/id/8125180-L.jpg",
      "The Great Gatsby": "https://covers.openlibrary.org/b/id/8226191-L.jpg",
      "Tender Is the Night":
        "https://covers.openlibrary.org/b/id/8235454-L.jpg",
      "Moby Dick": "https://covers.openlibrary.org/b/id/7222245-L.jpg",
      "Bartleby, the Scrivener":
        "https://covers.openlibrary.org/b/id/8235540-L.jpg",
      "War and Peace": "https://covers.openlibrary.org/b/id/8312674-L.jpg",
      "Anna Karenina": "https://covers.openlibrary.org/b/id/8225330-L.jpg",
      "The Catcher in the Rye":
        "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
      "Franny and Zooey":
        "https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg",
      "The Hobbit":
        "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
      "The Lord of the Rings":
        "https://covers.openlibrary.org/b/id/8231992-L.jpg",
      "The Old Man and the Sea":
        "https://covers.openlibrary.org/b/id/8305914-L.jpg",
      "A Farewell to Arms": "https://covers.openlibrary.org/b/id/8235784-L.jpg",
      "Brave New World": "https://covers.openlibrary.org/b/id/8226193-L.jpg",
      Island: "https://covers.openlibrary.org/b/id/8251455-L.jpg",
      "The Adventures of Sherlock Holmes":
        "https://covers.openlibrary.org/b/id/8225320-L.jpg",
      "The Hound of the Baskervilles":
        "https://covers.openlibrary.org/b/id/8221835-L.jpg",
      "Crime and Punishment":
        "https://covers.openlibrary.org/b/id/8225226-L.jpg",
      "The Brothers Karamazov":
        "https://covers.openlibrary.org/b/id/8225331-L.jpg",
      "One Hundred Years of Solitude":
        "https://covers.openlibrary.org/b/id/8232001-L.jpg",
      "Love in the Time of Cholera":
        "https://covers.openlibrary.org/b/id/8236746-L.jpg",
      "Invisible Man": "https://covers.openlibrary.org/b/id/8236761-L.jpg",
      Juneteenth: "https://covers.openlibrary.org/b/id/8282210-L.jpg",
      "The Grapes of Wrath":
        "https://covers.openlibrary.org/b/id/8235456-L.jpg",
      "Of Mice and Men": "https://covers.openlibrary.org/b/id/8235457-L.jpg",
      Beloved: "https://covers.openlibrary.org/b/id/8226195-L.jpg",
      "Song of Solomon": "https://covers.openlibrary.org/b/id/8235434-L.jpg",
      "Catch-22": "https://covers.openlibrary.org/b/id/8232003-L.jpg",
      "Something Happened": "https://covers.openlibrary.org/b/id/8232004-L.jpg",
      "The Handmaid's Tale":
        "https://covers.openlibrary.org/b/id/8232347-L.jpg",
      "Oryx and Crake": "https://covers.openlibrary.org/b/id/8232360-L.jpg",
      "Slaughterhouse-Five":
        "https://covers.openlibrary.org/b/id/8232349-L.jpg",
      "Cat's Cradle": "https://covers.openlibrary.org/b/id/8232348-L.jpg",
      "The Road": "https://covers.openlibrary.org/b/id/8232361-L.jpg",
      "No Country for Old Men":
        "https://covers.openlibrary.org/b/id/8232362-L.jpg",
    };

    const imageUrl = bookImages[title] || "/TestBook.jpg";
    console.log(`Title: ${title}, Image URL: ${imageUrl}`);
    return imageUrl;
  };

  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <BookCard
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
              onAddToCart={() => alert(`Added ${book.title} to cart`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
