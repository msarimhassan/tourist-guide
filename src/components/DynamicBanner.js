import { Button } from 'reactstrap';

const DynamicBanner = ({ image, text, height = '400px', hasButton = false }) => {
  const bannerStyle = {
    backgroundImage: `url(${image})`, // Use .default to get the URL from the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: height, // You can adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'column',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <h1 className='text-white text-center' style={{ zIndex: 10 }}>
        {text}
      </h1>
      {hasButton ? (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p style={{ color: 'white', fontWeight: 'bold', zIndex: 1 }}>
            Make your dreams come true
          </p>
          <Button color='#F97150' style={{ background: '#F97150', zIndex: 1, color: 'white' }}>
            Explore Now
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default DynamicBanner;
