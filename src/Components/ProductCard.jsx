import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import Image from "next/image";

const ProductsCard = (props) => {
  const { img, rating, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { ...props };

    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <>
      <div className="product_card rounded">
        <figure >
          <Image src={img} alt="item-img" width="200" height="200" className="m-auto"/>
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="title">{title}</h4>
        <h3 className="price">₹ {price.toLocaleString()}</h3>
        <button
          type="button"
          className={`btn ${isAdded ? "added" : ""} rounded bg-sky-600`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Added" : "Add to cart"}
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
