import sandwich from '../../images/sandwich-plate.jpg';
import salad from '../../images/salad-plate.jpg';
import muffins from '../../images/muffin-plate.jpg';
import oats from '../../images/sweet-plate.jpg';
import './OfferDiv.scss';

const OfferDiv = () => (
  <div className='container-lg'>
    <div className='row'>
      <h2 className='col text-center p-5'>
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
        <h4 className='text-center'>kolorowe przekąski, sałatki, przystawki</h4>
        <p className='text-center'>
          Jeśli trafiłeś na tę stronę oznacza to, że tak jak my, jesteś
          miłośnikiem jedzenia. Dlatego proponujemy ci pyszne przekąski, abyś
          mógł cieszyć swoje kupki smakowe także w przerwach między posiłkami.{' '}
        </p>
      </div>
      <div className='col-lg-3 plate'>
        <img src={oats} alt='' />
        <h4 className='text-center'>coś co wszyscy kochamy, słodkości</h4>
        <p className='text-center'>
          Gdy w ciągu dnia najdzie ochota na słodycze warto mieć pod ręką
          szybkie przepisy na ich zdrowsze, ale równie przepyszne wersje.{' '}
        </p>
      </div>
      <div className='col-lg-3 plate'>
        <img src={muffins} alt='' />
        <h4 className='text-center'>i mnóstwo innych pyszności</h4>
        <p className='text-center'>
          Inspiracje z wszystkich kuchni świata, starannie dobrane i dokładnie
          opisane doprawienie dań. Najważniejszy dla nas jest smak, chcemy
          zabrać cię w podróż do krainy dobroci. I to na dodatek pełnych zdrowia
          dobroci!{' '}
        </p>
      </div>
    </div>
  </div>
);

export default OfferDiv;
