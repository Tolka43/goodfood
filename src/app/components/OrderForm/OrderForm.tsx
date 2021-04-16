import { useContext, useState } from 'react';
import { FormRefContext, FormSitesContext } from '../Main/Main';
import OptionCards from '../2ndOrderFormSite/OptionsCards';
import UserDataForm from '../3rdOrderFormSite/UserData';
import config from '../config';
import './OrderForm.scss';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderForm = () => {
  const { formSiteNumber, setFormSiteNumber } = useContext(FormSitesContext);
  const formRef = useContext(FormRefContext);
  const [userName, setUserName] = useState('Hej');
  const [choosedArr, setChoosedArr] = useState<number[]>([]);

  switch (formSiteNumber) {
    case 1:
      return (
        <div ref={formRef} className='container-lg px-5'>
          <div className='row justify-content-center'>
            <div className='col-lg d-grid'>
              <button
                onClick={() => setFormSiteNumber(2)}
                type='button'
                className='btn btn-outline-dark'
              >
                ZAMÓW E-BOOK
              </button>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <OptionCards choosedArr={choosedArr} setChoosedArr={setChoosedArr} />
      );
    case 3:
      return <UserDataForm setUserName={setUserName} />;
    case 4:
      return (
        <div className='p-4 text-center summary'>
          <h3>{`${userName}, dziękujemy za zaufanie! Zamówiłeś e-book: 
            `}</h3>
          {config.cards
            .filter((card: any) => choosedArr.includes(card.id))
            .map(card => card.title)
            .map(title => (
                <h5 key={title} className='mt-2'>
                  <FontAwesomeIcon icon={faUtensils} /> {title}
                </h5>
            ))}
        </div>
      );
    default:
      return <div></div>;
  }
};

export default OrderForm;
