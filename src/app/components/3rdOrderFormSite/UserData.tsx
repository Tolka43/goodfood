import { useContext, useState } from 'react';
import { FormSitesContext } from '../Main/Main';

interface userDataProps {
  setUserName: (value: string) => void;
}

const UserDataForm = ({ setUserName }: userDataProps) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const { setFormSiteNumber } = useContext(FormSitesContext);
  return (
    <div className='container-lg px-5'>
      <div className='row justify-content-center'>
        <div className='col-lg d-grid'>
        <button
          onClick={() => userEmail.length > 2 ? setFormSiteNumber(4) : alert('wpisz e-mail')}
          type='button'
          className='btn btn-outline-dark'
        >
          ZATWIERDŹ
        </button>
        </div>
      </div>
      <div className='row'>
      <form className='col-lg'>
        <div className='m-3'>
          <label htmlFor='emailInput' className='form-label'>
            adres email
          </label>
          <input
            onChange={event => setUserEmail(event.target.value)}
            type='email'
            className='form-control'
            id='emailInput'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='m-3'>
          <label htmlFor='nameInput' className='form-label'>
            Imię
          </label>
          <input
            onChange={event => setUserName(event.target.value)}
            type='text'
            className='form-control'
            id='nameInput'
          />
        </div>
      </form>
      </div>
    </div>
  );
};

export default UserDataForm;
