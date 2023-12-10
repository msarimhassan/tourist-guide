import * as Yup from 'yup';

export const tourSchema = Yup.object().shape({
  title: Yup.string().required(),
  location: Yup.string().required(),
  price: Yup.number().required(),
  banner: Yup.mixed().required('Banner is required'),
  start_date: Yup.string().nullable().required(),
  end_date: Yup.string().nullable().required(),
  description: Yup.string(),
});
