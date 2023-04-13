import './Joke.css'
import { JokeResponse } from '../../apiCalls'

interface Props {
  data: JokeResponse | null;
  class: string;
  error?: string;
}

const Joke = ({data, error, class: Props}:Props) => {
  console.log(data)
  return (
    <section className={Props}>
      {data && !error ? data.joke : null}
      {error && <p className='home-error'>Sorry! {error} humor not found.</p>}
    </section>
  );
}

export default Joke;