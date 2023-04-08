import './Joke.css'
import { JokeResponse } from '../../apiCalls'
import Error from '../Error/Error'

interface Props {
  data: JokeResponse | null;
}

const Joke = ({data}:Props) => {
  return (
    <section className='main-joke'>
      {data ? data.joke : <Error />}
    </section>
  );
}

export default Joke;