import * as Yup from 'yup';

export const serviceProviderSignupSchema = Yup.object().shape({
  name: Yup.string().required('Company name is required'),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phoneNo: Yup.string().required(),
  banner: Yup.mixed().required('Banner is required'),
  fbUrl: Yup.string().required('Facebook page is required'),
  instaUrl: Yup.string().required('Insta page is required'),
});

