import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart } from "../../../assets/svg";
import {
  addFavorite,
  removeFavorite,
} from "../../../state/favoritesReducer/actions";

const PlanetCard = ({ planet }) => {
  const { name, diameter, climates, terrains } = planet;
  const dispatch = useDispatch();
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  const findMatch = favorites.filter((element) => element.name === name);
  const isFavorite = findMatch.length > 0;
  const [heartFill, setHeartFill] = useState(isFavorite ? "red" : "none");

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(planet));
      setHeartFill("none");
    } else {
      dispatch(addFavorite(planet));
      setHeartFill("red");
    }
  };

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <Heart heartFill={heartFill} onClick={handleFavorite} />
      </div>

      <div>
        <h4>Diametro:</h4> <span>{diameter}</span>
      </div>
      <div>
        <h4>Climas:</h4>
        {climates.map((clima, index) => (
          <span key={index}>{clima} </span>
        ))}
      </div>
      <div>
        <h4>Terrenos:</h4>
        {terrains.map((terrain, index) => (
          <span key={index}>{terrain} </span>
        ))}
      </div>
    </div>
  );
};

export default PlanetCard;
