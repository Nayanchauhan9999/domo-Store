import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import {
  decreaseQuantity,
  increseQuantity,
  removeItem,
} from "../store/slices/cartSlice";
import Link from "next/link";

const Cart = () => {
  const cartProducts = useSelector((state) => {
    return state.cart.proData;
  });
  const dispatch = useDispatch();
  let total = 0;
  cartProducts.map((value)=>{
    const {price, quantity} = value
   total = total + (price * quantity)
    return total
  })
  return (
    <div>
      <div>
        <h1 className="text-5xl max-sm:text-3xl bg-indigo-500 text-indigo-50 rounded-xl text-center p-3 mb-2 box-border me-3 ms-3">
          Shoping Cart
        </h1>
      </div>
      <div className="flex justify-between main-div-both max-sm:block items-start ">
        <div className="main-div-cart-items me-2 ms-2">
          {cartProducts.map((value) => {
            const { title, id, price, quantity } = value;
            return (
              <div key={value.id}>
                <div className="cart-products max-sm:p-2 rounded-xl flex relative p-5 border-b-2 border-t-2 border-indigo-100 mb-3">
                  <div className="pro-image-cart w-48 max-sm:w-32 me-2">
                    <img
                      src={value.img}
                      width="100%"
                      height="100%"
                      alt="product image"
                    />
                  </div>
                  <div className="pro-description flex flex-col justify-between">
                    <div className="title text-indigo-600 font-semibold">
                      {title}
                    </div>
                    <p className="font-semibold">₹ {price *quantity}</p>
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
        {cartProducts.length >= 1 && (
          <div className="order-summary bg-slate-200 rounded-xl p-3 box-border ms-3 me-3">
            <h5 className="font-semibold text-center">Order Summary</h5>
            <div className="flex justify-between pt-2 pb-2 border-b border-gray-300 ">
              <p className="text-slate-500">Sub Total</p>
              <h5 className="font-semibold">₹ {total}</h5>
            </div>
            <p className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-indigo-50 text-center rounded-md p-3">
              Checkout
            </p>
            <p className="text-center p-3 text-slate-500">
              or &nbsp;
              <Link href="/">
                <span className="cursor-pointer text-indigo-600">
                  Continue Shoping &rarr;
                </span>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
