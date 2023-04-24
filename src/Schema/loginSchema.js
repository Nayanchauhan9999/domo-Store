import * as yup from "yup"

const loginSchema = yup.object({
    email:yup.string().email().trim().required("Please enter your email!"),
    password:yup.string().trim().required("Please enter your password!")
})

export default loginSchema