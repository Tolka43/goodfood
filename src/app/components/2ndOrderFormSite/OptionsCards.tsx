import { useContext } from 'react';
import OptionCard from './OptionCard';
import './OptionCards.scss';
import { FormRefContext, FormSitesContext } from '../Main/Main';
import config from '../config';

interface OptionCardsProps {
  choosedArr: number[];
  setChoosedArr: (value: number[]) => void;
}

export interface cardsObj {
  id: number;
  imageUrl: string;
  title: string;
}

const OptionCards = ({
  choosedArr,
  setChoosedArr
}: OptionCardsProps) => {
  const { setFormSiteNumber } = useContext(FormSitesContext);
  const formRef = useContext(FormRefContext)

  return (
    <div ref={formRef} className='container-lg'>
      <div className='row justify-content-center'>
        <div className='col-lg d-grid'>
        {choosedArr.length > 0 ? (
          <button
            onClick={() => setFormSiteNumber(3)}
            type='button'
            className='btn btn-outline-dark'
          >
            DALEJ
          </button>
        ) : (
          <button type='button' className='btn btn-dark'>
            WYBIERZ E-BOOK
          </button>
        )}
        </div>
      </div>
      <div className='row'>
        {config.cards.map((card, i) => (
          <OptionCard
            key={i}
            card={card}
            choosedArr={choosedArr}
            setChoosedArr={setChoosedArr}
          />
        ))}
      </div>
    </div>
  );
};
export default OptionCards;
