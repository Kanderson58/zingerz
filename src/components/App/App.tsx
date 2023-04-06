import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import JokeContainer from '../JokeContainer/JokeContainer';
import Error from '../Error/Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/'> <HomePage /> </Route>
          <Route path='/search'> <JokeContainer /> </Route>
          <Route path='*'> <Error /> </Route>
        </Switch>
      </main>
    );
  }
}

export default App;