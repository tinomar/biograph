import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <nav>
          <ul>
            <li>
              <Link to="/movies">Movie Search</Link>
            </li>
            <li>
              <Link to="/movies/favorites">Favorite Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
