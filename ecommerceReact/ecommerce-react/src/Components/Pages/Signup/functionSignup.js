import * as Yup from "yup";



const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
const SingnupSchema = () => {
  return Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
    .matches(
      regexPassword,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match")
    .required("Confirm Password is required"),
  });
};
export {SingnupSchema};
