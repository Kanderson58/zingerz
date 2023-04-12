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

  useEffect(()=> {
    fetchJoke().then(data => { setData(data); });
  }, []);

  const getRandomJoke = () => {
    fetchJoke().then(newData => { setData(newData); });
  }

  return (
    <main onMouseMove={e => setMousePos({x: e.clientX, y: e.clientY})}>
      {sparkles(mousePos.x, mousePos.y)}
      <Header />
      <Switch>
        <Route exact path='/'> <HomePage data={data} getRandomJoke={getRandomJoke} /> </Route>
        <Route path='/search'> <SearchPage /> </Route>
        <Route path='*'> <Error /> </Route>
      </Switch>
    </main>
  );
}

export default App;