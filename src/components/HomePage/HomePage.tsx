import './HomePage.css';
import { JokeResponse } from '../../apiCalls';
import Joke from '../Joke/Joke';

interface Props {
  data: JokeResponse | null;
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