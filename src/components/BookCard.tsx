import Button from "./Button";

interface Props {
  children?: string;
  title?: string;
  price?: number;
}

const BookCard = ({
  children = "sample text",
  title = "title",
  price = 1,
}: Props) => {
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img
        src="public/TestBook.jpg"
        className="card-img-top"
        alt="Book Cover"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {children} <br /> {price}$
        </p>
        <Button onClick={() => alert("Button clicked")}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default BookCard;
