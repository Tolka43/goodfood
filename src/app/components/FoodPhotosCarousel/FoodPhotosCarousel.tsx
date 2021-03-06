import { Carousel } from 'react-bootstrap';
import vegetableBorder from '../../images/vegetable-border2.jpg';
import spices from '../../images/spices.jpg';
import pizza from '../../images/pizza.jpg';
import './FoodPhotosCarousel.scss';
import { useContext } from 'react';
import { FormSitesContext, FormRefContext } from '../Main/Main';

const FoodPhotosCarousel = () => {
  const { setFormSiteNumber } = useContext(FormSitesContext);
  const formRef = useContext(FormRefContext);

  return (
    <Carousel nextLabel={''} prevLabel={''}>
      <Carousel.Item interval={5000}>
        <img
          className='d-block w-100 carousel-img'
          src={vegetableBorder}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Sprawdź jak można jeść zdrowo, smacznie i róznorodnie!</h3>
          <p>Zamów e-book już teraz</p>
          <button
            onClick={() => {
              setFormSiteNumber(2);
              formRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            type='button'
            className='btn btn-outline-light'
          >
            ZAMÓW
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className='d-block w-100 carousel-img'
          src={spices}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Poznaj bogactwo smaków</h3>
          <p>
            Wszystkie posiłki w e-booku to dopracowane przepisy z wydobytym
            maksimum smaku
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 carousel-img pizza'
          src={pizza}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Przepisy na każdą okazję</h3>
          <p>Znajdziesz tu wszystko - od słodkich deserów po wytrawne obiady</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FoodPhotosCarousel;
