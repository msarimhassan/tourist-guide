import { useLocation } from 'react-router-dom';
import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const SearchTours = () => {
  const { setLoader } = useLoader();
  const location = useLocation();
  const { state } = location;
  const { showErrorMessage } = useToast();

  // const getSearchData = async () => {
  //   // console.log({
  //   //   location: state?.destination,
  //   //   start_date: dayjs(state?.startDate[0]).format('DD-MM-YYYY'),
  //   //   end_date: dayjs(state?.endDate[0]).format('DD-MM-YYYY'),
  //   // });

  //   setLoader(true);
  //   const response = await Network.post(Url.searchTours, {
  //     location: state?.destination,
  //   });

  //   setLoader(false);
  //   if (!response.ok) return showErrorMessage(response.data);
  //   console.log({ response });
  // };

  // useEffect(() => {
  //   getSearchData();
  // }, []);

  return <div>Hello</div>;
};

export default SearchTours;
