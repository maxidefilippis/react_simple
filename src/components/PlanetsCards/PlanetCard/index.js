import React, { useState } from "react";
import "./index.scss";
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

  const CardTitle = () => (
    <div className="planetCard__titleContainer">
      <h3 className="planetCard__title">{name}</h3>
      <Heart heartFill={heartFill} onClick={handleFavorite} />
    </div>
  );

  const CardProperties = () => {
    let clima = climates || planet.climate.split(",");
    let terra = terrains || planet.terrain.split(",");
    return (
      <div className="planetCard__properties">
        <h4>Diameter:</h4>
        <span className="planetCard__diameter">{diameter || 0}</span>
        <h4>Climates:</h4>
        <div className="planetCard__climatesContainer">
          {clima.map((clima, index) => (
            <span key={index} className="planetCard__climate">
              {clima}
            </span>
          ))}
        </div>
        <h4>Terrains:</h4>
        <div className="planetCard__terrainsContainer">
          {terra.map((terrain, index) => (
            <span key={index} className="planetCard__terrain">
              {terrain}
            </span>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="planetCard">
      <CardTitle />
      <CardProperties />
    </div>
  );
};

export default PlanetCard;
