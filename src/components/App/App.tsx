import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Error from '../Error/Error';
import SearchPage from '../SearchPage/SearchPage';
import { sparkles} from '../Sparkles';
import './App.css';
import { fetchJoke, JokeResponse } from '../../apiCalls';

const App = () => {
  const [data, setData] = useState<JokeResponse | null>({ id: '', joke: '' });
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [error, setError] = useState('')

  useEffect(()=> {
    fetchJoke().then(data => { setData(data); })
    .catch(error => { setError(error.toString())})
  }, []);

  const getRandomJoke = () => {
    setError('')
    fetchJoke().then(newData => { setData(newData); })
    .catch(error => { setError(error.toString())})
  }

  return (
    <main onMouseMove={e => setMousePos({x: e.clientX, y: e.clientY})}>
      {sparkles(mousePos.x, mousePos.y)}
      <Header />
      <Switch>
        <Route exact path='/'> <HomePage data={data} getRandomJoke={getRandomJoke} error={error} /> </Route>
        <Route path='/search'> <SearchPage /> </Route>
        <Route path='*'> <Error error={error} /> </Route>
      </Switch>
    </main>
  );
}

export default App;