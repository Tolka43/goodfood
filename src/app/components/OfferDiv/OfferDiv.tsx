import sandwich from '../../images/sandwich-plate.jpg';
import salad from '../../images/salad-plate.jpg';
import muffins from '../../images/muffin-plate.jpg';
import oats from '../../images/sweet-plate.jpg';
import './OfferDiv.scss';

const OfferDiv = () => (
  <div className='container-lg'>
    <div className='row justify-content-md-center'>
      <h2 className='col-12 text-center p-5'>
        Co znajdziesz w naszym e-booku?
      </h2>
    </div>
    <div className='row px-3'>
      <div className='col-lg-3 plate'>
        <img src={sandwich} alt='' />
        <h4 className='text-center'>
          pełnowartościowe śniadania na słono i słodko
        </h4>
        <p className='text-center'>
          Śniadanie to według nas najważniejszy posiłek. Od niego zaczynamy
          dzień, a więc warto zadbać by dodał jak najwięcej energii oraz chęci
          do działania.{' '}
        </p>
      </div>
      <div className='col-lg-3 plate'>
        <img src={salad} alt='' />
        <h4 className='text-center'>
          kolorowe przekąski, sałatki, przystawki
        </h4>
        <p className='text-center'>
          Gdy w ciągu dnia najdzie ochota na słodycze czy słone przekąski warto mieć pod ręką szybkie przepisy na ich zdrowsze wersje. {' '}
        </p>
      </div>
      <div className='col-lg-3 plate'>
        <img src={oats} alt='' />
        <h4 className='text-center'>
          coś co wszyscy kochamy, słodkości
        </h4>
        <p className='text-center'>
          Gdy w ciągu dnia najdzie ochota na słodycze czy słone przekąski warto mieć pod ręką szybkie przepisy na ich zdrowsze wersje. {' '}
        </p>
      </div>
      <div className='col-lg-3 plate'>
        <img src={muffins} alt='' />
        <h4 className='text-center'>
          pełnowartościowe śniadania na słono i słodko
        </h4>
        <p className='text-center'>
          Śniadanie to według nas najważniejszy posiłek. Od niego zaczynamy
          dzień, a więc warto zadbać by dodał jak najwięcej energii oraz chęci
          do działania.{' '}
        </p>
      </div>
    </div>
  </div>
);

export default OfferDiv;
