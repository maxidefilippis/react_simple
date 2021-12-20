import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { Button, PlanetsMapping, Title } from "../../components";
import { cleanFavorites } from "../../state/favoritesReducer/actions";
import Layout from "../../layout";

const Favorites = () => {
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  const dispatch = useDispatch();
  const areThereFavorites = favorites.length > 0;

  const FavoritesFooter = () =>
    areThereFavorites ? (
      <Button
        className="button favorites__button"
        name="Clean Favorites"
        onClick={() => dispatch(cleanFavorites())}
      />
    ) : (
      <p className="favorites__message">NO FAVORITES YET</p>
    );

  return (
    <Layout>
      <Title name="FAVORITES" />
      {areThereFavorites ? <PlanetsMapping data={favorites} /> : null}
      <FavoritesFooter />
    </Layout>
  );
};

export default Favorites;
