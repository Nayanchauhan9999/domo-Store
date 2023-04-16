import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const proData = useSelector((state) => {
    return state.cart.proData;
  });
  const proDataWishlist = useSelector((state) => state.wishlist);
  return (
    <div className="main-div-header flex justify-around mb-2 max-sm:pb-2 mt-2 items-center bg-indigo-500 sticky rounded top-0">
      <div className="navbar max-sm:overflow-auto">
        <Link
          className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
          href="/"
        >
          Home
        </Link>
        <Link
          className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
          href="/About"
        >
          About
        </Link>
        <Link
          className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
          href="/Contact"
        >
          Contact
        </Link>
        <Link
          className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
          href="/Cart"
        >
          Cart
          {proData.length === 0 ? null : (
            <span className="bg-red-500 ps-1 pe-1 rounded-full ms-1">
              {proData.length}
            </span>
          )}
        </Link>
        <Link
          className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
          href="/Wishlist"
        >
          Wishlist
          {proDataWishlist.length === 0 ? null : (
            <span className="bg-red-500 ps-1 pe-1 rounded-full ms-1">
              {proDataWishlist.length}
            </span>
          )}
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search Products"
        className="p-1 search-input-header ps-5 border rounded block lg:w-96 text-sky-600 md:w-64 sm:w-48 max-sm:mt-1 max-sm:mb-1"
      />
    </div>
  );
};

export default Header;
