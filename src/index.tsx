import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<BrowserRouter basename='zingerz'> <App /> </BrowserRouter>);