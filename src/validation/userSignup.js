import * as Yup from 'yup';

export const userSignupSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phoneNo: Yup.string().required(),
});
