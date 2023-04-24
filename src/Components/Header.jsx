import Link from "next/link";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

const Header = () => {
  const proData = useSelector((state) => {
    return state.cart.proData;
  });
  const [data, setData] = useState("");
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userData"));
    setData(localData);
  }, []);
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
        {!data ? (
          <Link
            className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
            href="/Login"
          >
            Login
          </Link>
        ) : (
          <Link
            className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-indigo-600 max-sm:text-sm"
            href="/profile"
          >
            Logout
          </Link>
        )}
      </div>
      <div className="search_field max-sm:w-11/12 mx-auto flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Products"
          className="p-1 search-input-header ps-5 border rounded block lg:w-96 text-sky-600 md:w-64 sm:w-48 max-sm:w-full max-sm:mt-1 max-sm:mb-1"
        />
        <Link href="/profile">
          <CgProfile className="text-indigo-50 h-6 w-6 mx-3 cursor-pointer hover:text-indigo-100 " />
        </Link>
      </div>
    </div>
  );
};

export default Header;
