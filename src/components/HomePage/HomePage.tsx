import './HomePage.css';
import { JokeResponse } from '../../apiCalls';
import Joke from '../Joke/Joke';

interface Props {
  data: JokeResponse | null;
  getRandomJoke: Function;
}

const HomePage = ({data, getRandomJoke}:Props) => {
  return (
    <div className='home-page'>
      <Joke class='main-joke' data={data} />
      <button className='new-joke-btn' onClick={() => {getRandomJoke()}}>Tell Me Another</button>
    </div>
  );
}

export default HomePage;