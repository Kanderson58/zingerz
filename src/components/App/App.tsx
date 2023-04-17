import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from '../Error/Error';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import { fetchJoke } from '../../apiCalls';
import { IJokeResponse } from '../../interfaces';
import './App.css';
import { fairyDustCursor } from "cursor-effects";

const App = () => {
  const [data, setData] = useState<IJokeResponse | null>({ id: '', joke: '' });
  const [error, setError] = useState('');

  useEffect(()=> {
    new fairyDustCursor();
    fetchJoke().then(data => { setData(data); })
      .catch(error => { setError(error.toString())});
  }, []);

  const getRandomJoke = () => {
    setError('')
    fetchJoke().then(newData => { setData(newData); })
      .catch(error => { setError(error.toString())});
  }

  return (
    <main>
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