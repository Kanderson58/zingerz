import './Joke.css'
import { JokeResponse } from '../../apiCalls'
import Error from '../Error/Error'

interface Props {
  className?: string
  data: JokeResponse | null
}

const Joke = ({className, data}:Props) => {
  return (
    <section>
      {data ? data.joke : <Error />}
    </section>
  );
}

export default Joke;