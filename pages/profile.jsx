import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const UserProfile = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userData"));
    setData(localData);

    if (!localData) {
    }
  }, []);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("userData");
    router.push("/");
  };
  return !data ? (
    <div className="w-11/12 mx-auto bg-white rounded my-5 py-16">
      <div className="text-center ">
        <CgProfile className="w-32 h-32 mx-auto text-slate-300" />
      </div>
      <p className="my-5 text-center px-8 text-slate-500">
        Look like you have not logged in, Please login for better user experience
      </p>
      <p className="text-center">
        Already have an Account?
        <Link href="Login" className="text-indigo-600 hover:underline">
        &nbsp;  Login &rarr;
        </Link>
      </p>
      <p className="text-center text-slate-500">or <Link href="SignUp" className="text-indigo-600 hover:underline">Sign Up &rarr; </Link> </p>

    </div>
  ) : (
    <div className="bg-white rounded my-8 w-11/12 mx-auto p-5">
      <h1 className="text-center text-4xl py-2 bg-indigo-500 text-indigo-50 rounded max-sm:text-2xl">
        Account Details
      </h1>
      <div className="my-4">
        <p className="text-slate-400">Name</p>
        <p className="text-slate-700 border-b">{data.name}</p>
      </div>
      <div className="my-4">
        <p className="text-slate-400">Email</p>
        <p className="text-slate-700 border-b">{data.email}</p>
      </div>
      <div className="my-4">
        <p className="text-slate-400">Mobile Number</p>
        <p className="text-slate-700 border-b">{data.mobile}</p>
      </div>
      <div className="Logout text-center my-4">
        <button
          className="bg-indigo-500 text-indigo-50 p-2 hover:bg-indigo-600 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
