import './Joke.css'
import { JokeResponse } from '../../apiCalls'
import { useLocation } from 'react-router-dom';

interface Props {
  data: JokeResponse | null;
  error?: string;
}

const Joke = ({data, error}:Props) => {
  const location = useLocation();
  const currentPath = (location.pathname === '/' ? 'main-joke' : 'search-joke');

  return (
    <section className={currentPath}>
      {data && !error ? data.joke : null}
      {error && <p className='home-error'>Sorry! {error} humor not found.</p>}
    </section>
  );
}

export default Joke;