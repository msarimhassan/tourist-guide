import { useEffect, useState } from 'react';

import { useLoader, useToast } from '../../hooks';

import { Network, Url } from '../../apiConfiguration';
import HotelBanner from '../../assets/images/banners/Hotel-banner.jpeg';
import { DynamicBanner, HotelCard } from '../../components';

const Hotels = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [hotels, setHotels] = useState([]);

  const getHotels = async () => {
    setLoader(true);
    const response = await Network.get(Url.getHotels);
    setLoader(false);
    console.log({ response });
    if (!response.ok) return showErrorMessage(response.data);
    setHotels(response.data);
  };

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div>
      <DynamicBanner image={HotelBanner} text={'Hotel and Stays'} />

      {hotels?.map((hotel) => {
        return <HotelCard hotel={hotel} />;
      })}
    </div>
  );
};

export default Hotels;
