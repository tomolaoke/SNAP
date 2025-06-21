import './HeaderNav.css';

const HeaderNav1 = () => {
  return (
    <div className="header-nav-1">
      <div className="logo">snap</div>
      <nav className="nav-links">
        <a href="#">Features <span className="dropdown-icon">▼</span></a>
        <a href="#">Company <span className="dropdown-icon">▼</span></a>
        <a href="#">Careers</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
};

export default HeaderNav1; //