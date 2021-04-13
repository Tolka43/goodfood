import './App.scss';
import Hello from './components/Hello';

function App() {
  return (
    <div className='App container p-5'>
      <div className='row'>
        <div className='col'>Column</div>
        <div className='col'>
          <Hello text='Hello!' />
        </div>
      </div>
    </div>
  );
}

export default App;
