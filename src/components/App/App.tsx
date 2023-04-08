import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import JokeContainer from '../JokeContainer/JokeContainer';
import Error from '../Error/Error';
import './App.css';
import { fetchJoke, JokeResponse } from '../../apiCalls';

const App = () => {
  const [data, setData] = useState<JokeResponse | null>({ id: '', joke: '' });

  useEffect(()=> {
    fetchJoke().then(data => { setData(data); });
  }, []);

  const getRandomJoke = () => {
    fetchJoke().then(newData => { setData(newData); });
  }

    return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/'> <HomePage data={data} getRandomJoke={getRandomJoke} /> </Route>
          <Route path='/search'> <JokeContainer /> </Route>
          <Route path='*'> <Error /> </Route>
        </Switch>
      </main>
    );
}

export default App;