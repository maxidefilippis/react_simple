import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Search } from "../components";
import { useSelector } from "react-redux";

const Links = () => {
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  return (
    <nav className="layout__links">
      <Link to="/">HOME</Link>
      <Link to="/favorites">FAVORITES: {favorites.length}</Link>
    </nav>
  );
};

const Footer = () => (
  <footer className="layout__footer">Ⓒ Developed by Maxi De Filippis.</footer>
);

const Layout = ({ children }) => (
  <div className="layout">
    <main className="layout__main">
      <header className="layout__header">
        <Links />
        <Search />
      </header>
      <section className="layout__content">{children}</section>
    </main>
    <Footer />
  </div>
);

export default Layout;
