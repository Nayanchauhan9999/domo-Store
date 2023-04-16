import Link from "next/link";

const OrderSummary = ({total}) => {
  return (
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
  );
};

export default OrderSummary;
