import { useContext, useState } from 'react';
import { FormSitesContext } from '../Main/Main';
import OptionCards from '../2ndOrderFormSite/OptionsCards';
import UserDataForm from '../3rdOrderFormSite/UserData';
import config from '../config';
import './OrderForm.scss';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface orderFormProps {
  formRef: any;
}

const OrderForm = ({ formRef }: orderFormProps) => {
  const { formSiteNumber, setFormSiteNumber } = useContext(FormSitesContext);
  const [userName, setUserName] = useState<string>('Hej');
  const [choosedArr, setChoosedArr] = useState<number[]>([]);

  switch (formSiteNumber) {
    case 1:
      return (
        <div ref={formRef} className='container-lg px-5'>
          <div className='row justify-content-center'>
            <button
              onClick={() => setFormSiteNumber(2)}
              type='button'
              className='btn btn-outline-dark col-lg-12'
            >
              ZAMÓW E-BOOKA
            </button>
          </div>
        </div>
      );
    case 2:
      return (
        <OptionCards
          formRef={formRef}
          choosedArr={choosedArr}
          setChoosedArr={setChoosedArr}
        />
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
              <>
                <h5 className='mt-2'><FontAwesomeIcon icon={faUtensils} /> {title}</h5>
              </>
            ))}
        </div>
      );
    default:
      return <div></div>;
  }
};

export default OrderForm;
