import OfferDiv from '../OfferDiv/OfferDiv';
import FoodPhotosCarousel from '../FoodPhotosCarousel/FoodPhotosCarousel';
import marble from '../../images/marble-knief.jpg';
import './Main.scss';

const Main = () => (
  <>
    <div className='container-lg'>
      <div className='row'>
        <div className='carousel-div py-5 col-12'>
          <FoodPhotosCarousel />
        </div>
      </div>
    </div>
    <div className='offer-div mb-5'>
      <OfferDiv />
    </div>
    <div className='container-lg form mb-4'>
      <div className='row'>
        <div className='carousel-div py-5 col-lg-4'>
          <img src={marble} alt='' />
        </div>
        <div className='carousel-div py-5  col-lg-8'>
        </div>
      </div>
    </div>
  </>
);

export default Main;
