import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const container: any = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<BrowserRouter> <App /> </BrowserRouter>);