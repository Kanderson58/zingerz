import React from 'react';
import './HomePage.css';
import { JokeResponse } from '../../apiCalls';

interface Props {
  data: JokeResponse | null
}

function HomePage({data}:Props) {

  return (
    <div>
      <h2>I'm a homepage!</h2>
    </div>
  );
}

export default HomePage;