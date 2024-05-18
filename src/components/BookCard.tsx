import React from "react";
import Button from "./Button";

interface Props {
  title: string;
  author: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const BookCard: React.FC<Props> = ({
  title,
  author,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="card" style={{ width: "16rem", margin: "10px" }}>
      <img src={image} className="card-img-top" alt="Book Cover" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {author} <br /> {price}$
        </p>
        <Button onClick={onAddToCart}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default BookCard;
