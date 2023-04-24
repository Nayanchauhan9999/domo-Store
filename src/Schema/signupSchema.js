import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const signupValidation = yup.object({
    name:yup.string().min(2).max(20).trim().required("Please Enter your name"),
    email:yup.string().email().trim().required("Please Enter your email"),
    mobile:yup.string().min(10).max(10).trim().required("Please Enter your mobile No"),
    password:yup.string().min(8).max(18).trim().required("Please Enter Your password"),
    confirmpassword:yup.string().trim().oneOf([yup.ref("password"),null], "Password does not match")
})

export default signupValidation