import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../layout";
import { PlanetsMapping } from "../../components";

const Favorites = () => {
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  return (
    <Layout>
      <div>Favorites: {favorites.length}</div>
      <PlanetsMapping planets={favorites} />
    </Layout>
  );
};

export default Favorites;
