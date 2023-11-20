import { Banner, GuideCard } from '../../components';

const TourGuides = () => {
  return (
    <div className=''>
      <Banner text='Tour Guides' />

      <div className='d-flex flex-wrap justify-content-center align-items-center mt-5'>
        {Array(5)
          .fill(0)
          .map((key) => {
            return <GuideCard key={key} />;
          })}
      </div>
    </div>
  );
};

export default TourGuides;
