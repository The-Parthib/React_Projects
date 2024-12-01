import Head from './components/Head';
import Slogan from './components/Slogan';
import Clock from './components/Clock';
import Spinner from './components/Spinner';
import './App.css'

function App() {

  return (
    <div className='body'>
      <Head />
      <Clock />
      <Slogan />
      <Spinner />
    </div>
  );
}

export default App;
