import './Joke.css'
import { IJokeResponse } from '../../interfaces'

interface Props {
  data: IJokeResponse | null;
  class: string;
  error?: string;
}

const Joke = ({data, error, class: Props}:Props) => {
  return (
    <section className={Props}>
      {data && !error ? data.joke : null}
      {error && <p className='home-error'>Sorry! {error} humor not found.</p>}
    </section>
  );
}

export default Joke;