import { useContext, useState } from 'react';
import OptionCard from './OptionCard';
import './OptionCards.scss';
import { FormSitesContext } from '../Main/Main';
import config from '../config'
interface optionCardsProps {
  choosedArr: number[];
  setChoosedArr?: (value: number[]) => void;
  formRef: any;
}

export interface cardsObj {
  id: number;
  imageUrl: string;
  title: string;
}

const OptionCards = ({choosedArr, setChoosedArr, formRef}:optionCardsProps) => {
  const {setFormSiteNumber} = useContext(FormSitesContext)

  return (
    <div ref={formRef} className='container-lg'>
      <div className='row justify-content-center'>
        {choosedArr.length > 0 ? (
          <button
            onClick={() => setFormSiteNumber(3)}
            type='button'
            className='btn btn-outline-dark col-lg-12'
          >
            DALEJ
          </button>
        ) : (
          <button type='button' className='btn btn-dark col-lg-12'>
            WYBIERZ E-BOOKA
          </button>
        )}
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
