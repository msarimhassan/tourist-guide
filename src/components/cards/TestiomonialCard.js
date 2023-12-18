import Avatar from '@components/avatar';

const TestimonialCard = () => {
  return (
    <div className='rounded shadow m-1' style={{ width: '400px', height: '300px' }}>
      <div className='d-flex align-items-center mt-2 ps-2 pt-2'>
        <Avatar
          color='light-warning'
          style={{
            height: '50px',
            width: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          content={'SA'}
        />
        <h5 className='ms-1'>John Doe</h5>
      </div>
      {/* content */}
      <div
        className='overflow-scroll px-2 py-1'
        style={{
          width: '400px',
          height: '200px',
        }}
      >
        <p>
          I had an amazing experience with XYZ Tours during my recent trip! The tour guide was
          incredibly knowledgeable and friendly, making the entire journey very enjoyable. The
          itinerary was well-planned, and we got to explore breathtaking landscapes and historical
          sites. The accommodations were comfortable, and the whole trip was a great value for the
          money. I highly recommend XYZ Tours to anyone looking for an unforgettable travel
          experience. I can't wait to go on another adventure with them!
        </p>
      </div>

      {/* avatar and user name */}
    </div>
  );
};

export default TestimonialCard;
