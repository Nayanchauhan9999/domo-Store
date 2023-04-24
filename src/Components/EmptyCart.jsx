import Link from "next/link";
import {BsCartPlus} from "react-icons/bs"

const EmptyCart = () => {
  return (
    <div className="my-32 max-sm:my-24">
      <div className="empty-cart flex items-center flex-col  h-72 border-box">
        <BsCartPlus className="text-slate-400" />
        <h2 className="text-2xl mt-3 font-sans text-slate-700">
          Your Cart Is Empty
        </h2>
        <p className="text-base text-center mt-3 text-slate-500">
          Looks Like You are not added anything to your Cart. Go ahead and
          explore Products
        </p>
        <Link href="/">
          <p className="bg-indigo-500 text-indigo-50 p-3 rounded-xl cursor-pointer hover:bg-indigo-600 mt-3">
            Continue Shoping &rarr;
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
