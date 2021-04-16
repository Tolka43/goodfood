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
        <button
          onClick={() => userEmail.length > 1 ? setFormSiteNumber(4) : alert('wpisz e-mail')}
          type='button'
          className='btn btn-outline-dark col-lg-12'
        >
          ZATWIERDŹ
        </button>
      </div>
      <form className='row justify-content-center'>
        <div className='m-3 col-lg-12'>
          <label htmlFor='emailInput' className='form-label'>
            Email address
          </label>
          <input
            onChange={event => setUserEmail(event.target.value)}
            type='email'
            className='form-control'
            id='emailInput'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='m-3 col-lg-12'>
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
  );
};

export default UserDataForm;
