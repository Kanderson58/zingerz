import Joke from '../Joke/Joke';
import { IJokeResponse } from '../../interfaces';
import './HomePage.css';

interface Props {
  data: IJokeResponse | null;
  getRandomJoke: Function;
  error: string;
}

const HomePage = ({data, getRandomJoke, error}:Props) => {
  return (
    <div className='home-page'>
      <Joke class='main-joke' data={data} error={error} />
      <button className='new-joke-btn' onClick={() => {getRandomJoke()}}>Tell Me Another</button>
    </div>
  );
}

export default HomePage;