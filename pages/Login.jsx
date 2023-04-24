import Link from "next/link";
import InputField from "../src/Generic Componets/InputField";
import Button from "../src/Generic Componets/Button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import loginSchema from "../src/Schema/loginSchema";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { login } from "../store/slices/localData";

const Login = () => {
  const [allUserData, setAllUserData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const userData = async () => {
      const response = await axios.get(
        "https://641bdea41f5d999a446babdd.mockapi.io/authontication"
      );
      const data = response.data;
      setAllUserData(data);
    };
    userData();
  }, []);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch()
  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (value, action) => {
        const userDetails = allUserData.find(
          (val2) => val2.email === value.email
        );
        if (userDetails === undefined) {
          return setErrorMsg("user not found!");
        } else {
          if (
            userDetails.email !== value.email ||
            userDetails.password !== value.password
          ) {
            return setErrorMsg("incorrect email or password");
          } else {
            localStorage.setItem("userData",JSON.stringify(userDetails))
            // dispatch(login(userDetails))
            router.push("/");
          }
        }
        action.resetForm();
        setErrorMsg(false);
      },
    });
  return !allUserData ? (
    <p>Loading...</p>
  ) : (
    <div className="my-16 w-1/3 mx-auto max-lg:w-1/2 max-md:w-9/12 max-sm:w-11/12">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl text-center my-8 tracking-wider">
          Login
        </h2>
        <InputField
          name="email"
          id="email"
          placeholder="Email Address"
          type="email"
          htmlfor="email"
          label="Email"
          handleChange={handleChange}
          value={values.email}
          handleBlur={handleBlur}
        />
        {touched.email && errors.email ? (
          <p className="text-red-500 mb-3">{errors.email}</p>
        ) : null}
        <InputField
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          htmlfor="password"
          label="Password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password ? (
          <p className="text-red-500 mb-3">{errors.password}</p>
        ) : null}
        <Button identifire="Sign in" />
        {!errorMsg ? null : <p className="text-red-600">{errorMsg}</p>}
        <p className="text-center text-indigo-600 font-medium cursor-pointer hover:underline tracking-wider">
          Forget Password?
        </p>
        <p className="text-center my-3 tracking-wider">
          Does not have account ?
          <Link href="signup" className="text-indigo-600 hover:underline ps-2">
            Sign Up &rarr;
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
