import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import OrderSummary from "../src/Components/OrderSummary";
import CartProducts from "../src/Components/CartProducts";
import EmptyCart from "../src/Components/EmptyCart";

const Cart = () => {
  const cartProducts = useSelector((state) => {
    return state.cart.proData;
  });
  let total = 0;
  cartProducts.map((value) => {
    const { price, quantity } = value;
    total = total + price * quantity;
    return total;
  });
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <div>
        <h1 className="text-5xl max-sm:text-3xl bg-indigo-500 text-indigo-50 rounded-xl text-center p-3 mb-2 box-border">
          Shoping Cart
        </h1>
      </div>
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-between main-div-both max-sm:block items-start ">
          <CartProducts />
          {cartProducts.length >= 1 && <OrderSummary total={total} />}
        </div>
      )}
    </div>
  );
};

export default Cart;
