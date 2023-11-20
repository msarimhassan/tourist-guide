import { DestinationCard, Banner } from '../../components';

const Destinations = () => {
  return (
    <div>
      <Banner text='Destinations' />
      <div className='d-flex flex-wrap justify-content-center align-items-center mt-5'>
        {Array(5)
          .fill(0)
          .map((key) => {
            return <DestinationCard key={key} />;
          })}
      </div>
    </div>
  );
};

export default Destinations;
