const Banner = ({ text }) => {
  return (
    <div className='banner'>
      <div className='banner-content d-flex align-items-center flex-column'>
        <h1 style={{ color: 'black' }}>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
