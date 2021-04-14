import { Carousel } from 'react-bootstrap';
import vegetableBorder from '../../images/vegetable-border2.jpg';
import bread from '../../images/bread.jpg';
import avocado from '../../images/avocado.jpg';
import './FoodPhotosCarousel.scss';

const FoodPhotosCarousel = () => (
  <Carousel className='m-0'>
    <Carousel.Item interval={3000}>
      <img className='d-block w-100' src={vegetableBorder} alt='First slide' />
      <Carousel.Caption>
        <h3>Sprawdź jak można jeść smacznie i zdrowo!</h3>
        <p>Zamów e-book już teraz</p>
        <button className='btn btn-primary'>zamów</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
      <img className='d-block w-100' src={bread} alt='Second slide' />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='d-block w-100' src={avocado} alt='Third slide' />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default FoodPhotosCarousel;
