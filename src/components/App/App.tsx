import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import JokeContainer from '../JokeContainer/JokeContainer';
import Error from '../Error/Error';
import './App.css';

interface IState { data: any }

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    // Figure out  how to manage state in React v4 with TS
    this.state = {data: {}}
  }

  componentDidMount(): void {
    
  }

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