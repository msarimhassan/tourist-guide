import * as Yup from 'yup';

export const roomSchema = Yup.object().shape({
  area: Yup.number().required('Area is required').nullable(),
  maxGuest: Yup.number().required('Guests are required').nullable(),
  noOfBath: Yup.number().required('Bathrooms are required').nullable(),
  roomType: Yup.string().required('Room type is required'),
  price: Yup.number().required('Price is required').nullable(),
  description: Yup.string().required('Description is required'),
});
