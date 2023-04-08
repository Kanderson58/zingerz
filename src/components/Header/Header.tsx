import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../header-2.png';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img className='logo' src={logo} alt="ZingerZ Logo" />
      </Link>
      <div className='nav-links'>
        <Link to='/'> HOME </Link>
        <Link to='/search'> SEARCH </Link>
      </div>
    </header>
  );
}

export default Header;