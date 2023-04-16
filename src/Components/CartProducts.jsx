import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import {increseQuantity , decreaseQuantity, removeItem} from "../../store/slices/cartSlice"


const CartProducts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => {
    return state.cart.proData;
  });

  return (
    <>
      <div className="main-div-cart-items">
        {cartProducts.map((value) => {
          const { title, id, price, quantity, img } = value;
          return (
            <div key={id}>
              <div className="cart-products max-sm:p-2 rounded-xl flex relative p-5 border-b-2 border-t-2 border-indigo-100 mb-3">
                <div className="pro-image-cart w-48 max-sm:w-32 me-2">
                  <img
                    src={img}
                    width="100%"
                    height="100%"
                    alt="product image"
                  />
                </div>
                <div className="pro-description flex flex-col justify-between">
                  <div className="title text-indigo-600 font-semibold">
                    {title}
                  </div>
                  <p className="font-semibold">₹ {price * quantity}</p>
                  <p className="text-green-500">In Stock &#10003;</p>
                  <div className="pro-quantity flex items-center">
                    <button
                      className="quantity-btn bg-indigo-500 me-1 ps-3 pe-3 pt-1 pb-1 rounded hover:bg-indigo-400 text-indigo-50"
                      onClick={() => dispatch(decreaseQuantity(value))}
                    >
                      -
                    </button>
                    <button className="quantity-btn bg-indigo-200 border-black me-1 ps-3 pe-3 pt-1 pb-1 rounded text-indigo-950">
                      Qty : &nbsp;{value.quantity}
                    </button>
                    <button
                      className="quantity-btn bg-indigo-500 me-1 ps-3 pe-3 pt-1 pb-1 rounded hover:bg-indigo-400 text-indigo-50"
                      onClick={() => dispatch(increseQuantity(value))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className="CartItems absolute right-3 hover:bg-slate-200 p-2 rounded-full"
                  role="button"
                  onClick={() => dispatch(removeItem(id))}
                >
                  <MdClose className="text-indigo-500" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartProducts;
