import { useContext, useState } from 'react';
import { FormSitesContext } from '../Main/Main';
import OptionCards from '../2ndOrderFormSite/OptionsCards';
import UserDataForm from '../3rdOrderFormSite/UserData';
import config from '../config';
import './OrderForm.scss';

const OrderForm = () => {
  const { formSiteNumber, setFormSiteNumber } = useContext(FormSitesContext);
  const [userName, setUserName] = useState<string>('Hej');
  const [choosedArr, setChoosedArr] = useState<number[]>([]);

  switch (formSiteNumber) {
    case 1:
      return (
        <div className='container-lg px-5'>
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
        <OptionCards choosedArr={choosedArr} setChoosedArr={setChoosedArr} />
      );
    case 3:
      return <UserDataForm setUserName={setUserName} />;
    case 4:
      return (
        <h3 className='p-5 text-center summary'>{`${userName}, dziękujemy za zaufanie! Zamówiłeś e-book: ${config.cards
          .filter((card: any) => choosedArr.includes(card.id))
          .map(card => card.title)
          .map(title => title)}`}</h3>
      );
    default:
      return <div></div>;
  }
};

export default OrderForm;
