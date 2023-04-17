import { Link } from 'react-router-dom';
import logo from '../../header-2.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to='/zingerz/'>
        <img className='logo' src={logo} alt="ZingerZ Logo" />
      </Link>
      <div className='nav-links'>
        <Link to='/zingerz/'> HOME </Link>
        <Link to='/zingerz/search'> SEARCH </Link>
      </div>
    </header>
  );
}

export default Header;