import { useState } from 'react';
import { cardsObj } from './OptionsCards';

// nie rozumiem czemu nie działa ten interface i dlatego jest any
interface OptionCardProps {
  card: cardsObj;
  choosedArr: number[];
  setChoosedArr: (value: number[]) => void;
}

const OptionCard = ({ card, choosedArr, setChoosedArr }: OptionCardProps) => {
  const [choosed, setChoosed] = useState(false);
  return (
    <div className='col-lg-3 py-5'>
      <div
        onClick={() => {
          setChoosed(!choosed);
          if (choosed) {
            setChoosedArr(choosedArr.filter((num: number) => num !== card.id));
          } else {
            setChoosedArr([...choosedArr, card.id]);
          }
        }}
        className='card m-3'
      >
        <img
          src={card.imageUrl}
          className={`card-img-top ${choosed ? 'choosed' : null}`}
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title text-center'>{card.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
