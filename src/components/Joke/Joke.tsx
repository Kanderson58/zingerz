import './Joke.css'
import { JokeResponse } from '../../apiCalls'
import Error from '../Error/Error'

interface Props {
  data: JokeResponse | null;
  class: string;
}

const Joke = ({data, class: Props}:Props) => {
  return (
    <section className={Props}>
      {data ? data.joke : null}
    </section>
  );
}

export default Joke;