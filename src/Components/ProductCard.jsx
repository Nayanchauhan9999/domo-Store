import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import {BsFillHeartFill} from "react-icons/bs"
import { addToWishlist } from "../../store/slices/wishlistSlice";

const ProductsCard = (props) => {
  const { img, rating, title, price, id,quantity} = props;

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
      <div className="product_card rounded relative">
        <figure >
          <img src={img} alt="item-img" className="m-auto"/>
        </figure>
        <h4 className="title">{title}</h4>
        <h3 className="price">₹ {price.toLocaleString()}</h3>
        <strong className="rating">{rating} {rating.length}/5 </strong>
        <button
          type="button"
          className={`btn ${isAdded ? "added" : ""} rounded bg-indigo-500 hover:bg-indigo-600`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Added" : "Add to cart"}
        </button>
        <div className="addtowislist absolute right-3 top-3 cursor-pointer text-slate-300">
            <BsFillHeartFill size={26} onClick={()=>dispatch(addToWishlist(props))}/>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
