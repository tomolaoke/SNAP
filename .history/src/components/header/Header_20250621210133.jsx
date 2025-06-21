import './Header.css';
import HeaderNav1 from '../../block/headerblock/HeaderNav1';
import HeaderNav2 from '../../block/headerblock/HeaderNav2';

const Header = () => {
  return (
    <header className="header">
      <HeaderNav1 />
      <HeaderNav2 />
    </header>
  );
};

export default Header;