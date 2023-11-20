import { Container, Row, Col } from 'reactstrap';

const DynamicBanner = ({ image, text }) => {
  const bannerStyle = {
    backgroundImage: `url(${image})`, // Use .default to get the URL from the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', // You can adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
      <h1 className='text-white text-center' style={{zIndex:10}}>{text}</h1>
    </div>
  );
};

export default DynamicBanner;
