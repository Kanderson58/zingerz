import './HomePage.css';
import { JokeResponse } from '../../apiCalls';
import Joke from '../Joke/Joke';

interface Props {
  data: JokeResponse | null
}

const HomePage = ({data}:Props) => {
  return (
    <div>
      <Joke className='main-joke' data={data} />
      <button className='new-joke-btn'>Tell Me Another</button>
    </div>
  );
}

export default HomePage;