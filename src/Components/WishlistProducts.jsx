import { useDispatch, useSelector } from "react-redux";
import {removeWishlist} from "../../store/slices/wishlistSlice"

const WishlistProducts = () => {
  const wishlistProducts = useSelector((state) => state.wishlist);
  const dispatch = useDispatch()
  return (
    <>
      <div className="wishlist-product-main-div text-center">
        {wishlistProducts.map((value) => {
          return (
            <div className="main-div-wishlist flex flex-col border-2 p-2 border-indigo-200 rounded-xl" key={value.id}>
              <div className="wishlist-image w-32 m-auto">
                <img src={value.img} alt="product-image" width="100%"/>
              </div>
              <h4 className="hover:text-sky-600 cursor-pointer">{value.title}</h4>
              <h4>₹ {value.price}</h4>
              <p className="text-orange-600">{value.rating} ({value.rating.length}/5)</p>
              <button className="bg-indigo-500 hover:bg-indigo-600 p-2 rounded text-indigo-50" onClick={()=>dispatch(removeWishlist(value.id))}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishlistProducts;
