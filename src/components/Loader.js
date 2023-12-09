

import Lottie from 'lottie-react';

import LoaderAnimation from '../assets/animations/Loader.json';

const Loader = ({ visible }) => {
  if (!visible) return null;

  return (
    <div
      className='w-100 h-100 d-flex justify-content-center align-items-center position-fixed opacity-75 bg-black'
      style={{ zIndex: 99999 }}
    >
      <div style={{width:'300px'}}>
        <Lottie
          animationData={LoaderAnimation}
          loop
          autoPlay
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Loader;