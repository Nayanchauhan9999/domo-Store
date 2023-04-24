import InputField from "../src/Generic Componets/InputField";
import Button from "../src/Generic Componets/Button";
import Link from "next/link";
import { useFormik } from "formik";
import signupValidation from "../src/Schema/signupSchema";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  };
  const [allUserData, seAllUserData] = useState([]);
  const [cloneId, setCloneId] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const userdata = async () => {
      const response = await axios.get(
        "https://641bdea41f5d999a446babdd.mockapi.io/authontication"
      );
      const data = response.data;
      seAllUserData(data);
    };
    userdata();
  }, []);
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupValidation,
      onSubmit: (value, action) => {
        const findSimilerID = allUserData.some((val2) => {
          if (val2.mobile === value.mobile || val2.email === value.email) {
            return true;
          } else {
            return false;
          }
        });
        if (findSimilerID) {
          return setCloneId("Email or Mobile number already exist");
        } else {
          axios.post(
            "https://641bdea41f5d999a446babdd.mockapi.io/authontication",
            value
          );
          setCloneId(false)
        }
        action.resetForm();
        router.push("/")
      },
    });
  return (
    <div className="my-14 w-1/3 mx-auto max-lg:w-1/2 max-md:w-9/12 max-sm:w-11/12">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl text-center my-8 tracking-wider">
          Sign Up
        </h2>
        <InputField
          name="name"
          id="name"
          placeholder="Your Name"
          type="name"
          htmlfor="name"
          label="Name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name ? (
          <p className="text-red-500 mb-3">{errors.name}</p>
        ) : null}
        <InputField
          name="email"
          id="email"
          placeholder="Email Address"
          type="email"
          htmlfor="email"
          label="Email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <p className="text-red-500 mb-3">{errors.email}</p>
        ) : null}

        <InputField
          name="mobile"
          id="mobile"
          placeholder="Mobile No"
          type="tel"
          htmlfor="mobile"
          label="Mobile No"
          handleChange={handleChange}
          value={values.mobile}
          handleBlur={handleBlur}
        />
        {touched.mobile && errors.mobile ? (
          <p className="text-red-500 mb-3">{errors.mobile}</p>
        ) : null}

        <InputField
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          htmlfor="password"
          label="Password"
          handleChange={handleChange}
          value={values.password}
          handleBlur={handleBlur}
        />
        {touched.password && errors.password ? (
          <p className="text-red-500 mb-3">{errors.password}</p>
        ) : null}

        <InputField
          name="confirmpassword"
          id="confirmpassword"
          placeholder="Confirm Password"
          type="password"
          htmlfor="confirmpassword"
          label="Confirm Password"
          handleChange={handleChange}
          value={values.confirmpassword}
          handleBlur={handleBlur}
        />
        {touched.confirmpassword && errors.confirmpassword ? (
          <p className="text-red-500 mb-3">{errors.confirmpassword}</p>
        ) : null}
        <Button identifire="Sign Up" />
        { !cloneId? null : <p className="text-red-600">{cloneId}</p>}
        <p className="text-center my-3 tracking-wider">
          Already have an account?
          <Link href="Login" className="text-indigo-600 hover:underline ps-2">
            Login &rarr;
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
