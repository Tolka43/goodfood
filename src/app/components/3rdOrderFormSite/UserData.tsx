import { useContext, useState } from 'react';
import { FormSitesContext } from '../Main/Main';
import './UserData.scss'

interface userDataProps {
  setUserName: (value: string) => void;
}

const UserDataForm = ({ setUserName }: userDataProps) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState(true);
  const { setFormSiteNumber } = useContext(FormSitesContext);
  return (
    <div className='container-lg px-5'>
      <div className='row'>
        <div className='col-lg d-grid'>
          <button
            onClick={() => {
              if (
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  userEmail
                )
              ) {
                setValidEmail(true)
                setFormSiteNumber(4);
              } else {
                setValidEmail(false);
              }
            }}
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
            {!validEmail && <p className='invalid-text'>wpisz poprawny adres email</p>}
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
