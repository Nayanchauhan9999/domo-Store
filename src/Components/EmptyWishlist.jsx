import { BsEmojiFrown } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";

const EmptyWishlist = () => {
  return (
    <>
      <div className="empty-wishlist-page my-24 flex flex-col justify-center items-center">
        <BsEmojiFrown className="w-28 h-28 text-slate-400" />
        <h1 className="text-2xl mt-3 font-sans text-slate-600">
          Your wishlist is Empty
        </h1>
        <p className="text-slate-500 text-center mt-3">
          Looks Like You are not added anything to your Wishlist. Go ahead and
          explore Products
        </p>
        <p className="flex items-center text-slate-500 mt-3">
          Click &nbsp; <BsFillHeartFill className="text-red-600" /> &nbsp; to
          add products to your Wishlist
        </p>
        <Link href="/">
          <p className="bg-indigo-500 text-indigo-50 p-3 rounded-xl cursor-pointer hover:bg-indigo-600 mt-3">
            Continue Shoping &rarr;
          </p>
        </Link>
      </div>
    </>
  );
};

export default EmptyWishlist;
