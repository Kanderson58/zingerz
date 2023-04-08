import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'> <h1>ZingerZ</h1> </Link>
      <Link to='/'> HOME </Link>
      <Link to='/search'> SEARCH </Link>
    </header>
  );
}

export default Header;