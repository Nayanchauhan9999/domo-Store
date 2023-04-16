import React from "react";
import WishlistProducts from "../src/Components/WishlistProducts";

const Wishlist = () => {
  return (
    <>
      <div>
        <h2 className="text-5xl max-sm:text-3xl bg-indigo-500 text-indigo-50 rounded-xl text-center p-3 mb-2 box-border">Your Wishlist</h2>
        <WishlistProducts/>
      </div>
    </>
  );
};

export default Wishlist;
