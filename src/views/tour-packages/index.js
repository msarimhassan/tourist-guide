import {Banner, TourCard} from '../../components'
import Select from 'react-select';

const TourPackages = () => {
    return (
      <div>
        <Banner text={'Tour Packages'} />
        <div className='d-flex justify-content-end align-items-center mt-3'>
          <h5 className='me-1'>SortBy:</h5>
          <Select options={[]} />
        </div>

        <div className='d-flex justify-content-center align-items-center flex-wrap'>
          {Array(5)
            .fill(0)
            .map((key) => {
              return <TourCard key={key} />;
            })}
        </div>
      </div>
    );
}
export default TourPackages
