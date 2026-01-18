import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          Aplikasi Catatan
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/')}>
              Catatan Aktif
            </Link>
          </li>
          <li>
            <Link to="/archives" className={isActive('/archives')}>
              Catatan Arsip
            </Link>
          </li>
          <li>
            <Link to="/notes/new" className={isActive('/notes/new')}>
              Tambah Catatan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
