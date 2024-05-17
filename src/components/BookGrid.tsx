import BookCard from "./BookCard";

const BookGrid = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-4">
        <div className="col">
          <BookCard></BookCard>
        </div>
        <div className="col">
          <BookCard></BookCard>
        </div>
        <div className="col">
          <BookCard></BookCard>
        </div>
        <div className="col">
          <BookCard></BookCard>
        </div>
      </div>
    </div>
  );
};

export default BookGrid;
