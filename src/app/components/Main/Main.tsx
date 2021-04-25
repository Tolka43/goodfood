import OfferDiv from '../OfferDiv/OfferDiv';
import FoodPhotosCarousel from '../FoodPhotosCarousel/FoodPhotosCarousel';
import './Main.scss';
import OrderForm from '../OrderForm/OrderForm';
import { useState, createContext, useRef, RefObject } from 'react';

interface formSites {
  formSiteNumber: number;
  setFormSiteNumber: (value: number) => void;
}

const defaultValue: formSites = {
  formSiteNumber: 0,
  setFormSiteNumber: () => {},
};

export const FormSitesContext = createContext<formSites>(defaultValue);
export const FormRefContext = createContext<RefObject<HTMLDivElement>>(
  undefined as any
);

const Main = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formSiteNumber, setFormSiteNumber] = useState(1);

  return (
    <FormRefContext.Provider value={formRef}>
      <FormSitesContext.Provider value={{ formSiteNumber, setFormSiteNumber }}>
        <div className='container-lg'>
          <div className='row'>
            <div className='carousel-div col d-flex align-items-center justify-content-center'>
              <FoodPhotosCarousel/>
            </div>
          </div>
        </div>
        <div className='offer-div'>
          <OfferDiv />
        </div>
        <div className='form p-5'>
          <OrderForm />
        </div>
      </FormSitesContext.Provider>
    </FormRefContext.Provider>
  );
};

export default Main;
