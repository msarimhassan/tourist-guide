import Nature from '../../assets/images/cards/Card-1.jpeg';

const LocationSlide = ({ label }) => {
  return (
    <div
      style={{
        width: '250px',
        height: '80px',
        background: ' #0F3950',
        borderRadius: '80px',
      }}
      className='d-flex px-2 align-items-center m-2'
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img src={Nature} style={{ objectFit: 'cover', height: 'auto', width: '100%' }} />
      </div>
      <div className='ms-1'>
        <h4 style={{ color: 'white' }}>{label}</h4>
      </div>
    </div>
  );
};

export default LocationSlide;
