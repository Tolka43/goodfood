import OfferDiv from '../OfferDiv/OfferDiv';
import FoodPhotosCarousel from '../FoodPhotosCarousel/FoodPhotosCarousel';
import './Main.scss';
import OrderForm from '../OrderForm/OrderForm';
import { useState, createContext, useRef } from 'react';
interface formSites {
  formSiteNumber: number;
  setFormSiteNumber: (value: number) => void;
}

const defaultValue: formSites = {
  formSiteNumber: 0,
  setFormSiteNumber: () => {},
};


export const FormSitesContext = createContext<formSites>(defaultValue);

const Main = () => {
  const formRef = useRef<any>(null)
  const [formSiteNumber, setFormSiteNumber] = useState(1);
  return (
    <>
      <FormSitesContext.Provider value={{ formSiteNumber, setFormSiteNumber }}>
        <div className='container-lg'>
          <div className='row'>
            <div className='carousel-div py-5 col-12'>
              <FoodPhotosCarousel formRef={formRef}/>
            </div>
          </div>
        </div>
        <div className='offer-div'>
          <OfferDiv />
        </div>
        <div className='form p-5'>
          <OrderForm formRef={formRef}/>
        </div>
      </FormSitesContext.Provider>
    </>
  );
};

export default Main;
