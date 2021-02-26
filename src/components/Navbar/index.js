import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DATA_LINKS } from './constants';
import NavLink from './components/Nav-link';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button type="button" onClick={() => setShowMenu(!showMenu)} className="navbar-toggler collapsed ml-auto">
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
        <div className="navbar-nav">
          { DATA_LINKS.map(({ linkTo, linkText, id }) => (
            <NavLink linkTo={linkTo} key={id} isActive={location.pathname === linkTo}>
              { linkText }
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
