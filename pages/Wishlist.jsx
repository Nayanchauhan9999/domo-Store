import React from "react";
import WishlistProducts from "../src/Components/WishlistProducts";
import Head from "next/head";
import EmptyWishlist from "../src/Components/EmptyWishlist";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  return (
    <>
      <Head>
        <title>Wishlist</title>
      </Head>

      <div>
        <h2 className="text-5xl max-sm:text-3xl bg-indigo-500 text-indigo-50 rounded-xl text-center p-3 mb-2 box-border">
          Your Wishlist
        </h2>
        {wishlistItems.length === 0 ? <EmptyWishlist /> : <WishlistProducts />}
      </div>
    </>
  );
};

export default Wishlist;
