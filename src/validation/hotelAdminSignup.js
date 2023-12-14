import * as Yup from 'yup';

export const hotelAdminSchema = Yup.object().shape({
  name: Yup.string().required('Company name is required'),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phoneNo: Yup.string().required(),
  banner: Yup.mixed().required('Banner is required'),
  description: Yup.string().required(),
});
