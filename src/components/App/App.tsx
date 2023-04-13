import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from '../Error/Error';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import { fetchJoke } from '../../apiCalls';
import { Sparkles } from '../Sparkles/Sparkles';
import { IJokeResponse } from '../../interfaces';
import './App.css';

let sparkles: Array<JSX.Element> = [];

const App = () => {
  const [data, setData] = useState<IJokeResponse | null>({ id: '', joke: '' });
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [error, setError] = useState('');

  useEffect(()=> {
    fetchJoke().then(data => { setData(data); })
    .catch(error => { setError(error.toString())})
  }, []);

  const getRandomJoke = () => {
    setError('')
    fetchJoke().then(newData => { setData(newData); })
    .catch(error => { setError(error.toString())})
  }

  const configureSparkles = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMousePos({x: e.clientX, y: e.clientY});
    sparkles.push(<Sparkles x={mousePos.x} y={mousePos.y} />);
    setTimeout(() => {sparkles = sparkles.slice(1)}, 500);
  }

  return (
    <main onMouseMove={e => configureSparkles(e)}>
      {sparkles.map(sparkle => sparkle)}
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