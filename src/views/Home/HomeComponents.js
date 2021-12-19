import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACK_LIMIT, NEXT_LIMIT } from "../../constants";
import { Button } from "../../components";
import { Heart } from "../../assets/svg";
import {
  addFavorite,
  removeFavorite,
} from "../../state/favoritesReducer/actions";

export const PaginationControls = ({ controls, pagination }) => (
  <div>
    <Button
      name="Back"
      onClick={controls["back"]}
      disabled={pagination === BACK_LIMIT}
    />
    <p>
      Page: {pagination} of {NEXT_LIMIT}
    </p>
    <Button
      name="Next"
      onClick={controls["next"]}
      disabled={pagination === NEXT_LIMIT}
    />
  </div>
);

export const PlanetsMapping = ({ planets }) => (
  <div>
    {planets.map((planet) => (
      <PlanetCard key={planet.name} planet={planet} />
    ))}
  </div>
);

export const PlanetCard = ({ planet }) => {
  const [heartFill, setHeartFill] = useState("none");
  const { name, diameter, climates, terrains } = planet;
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    const findMatch = favorites.filter((element) => element.name === name);
    const isFavorite = findMatch.length > 0;

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
