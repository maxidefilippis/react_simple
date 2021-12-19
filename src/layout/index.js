import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      Proyecto desarrollado por Maxi De Filippis.
    </footer>
  </div>
);

export default Layout;
