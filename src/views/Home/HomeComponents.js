import React from "react";
import { BACK_LIMIT, NEXT_LIMIT } from "../../constants";
import { Button } from "../../components";

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

export const PlanetCard = ({ planet }) => (
  <div>
    <h3>{planet.name}</h3>
    <div>
      <h4>Diametro:</h4> <span>{planet.diameter}</span>
    </div>
    <div>
      <h4>Climas:</h4>
      {planet.climates.map((clima, index) => (
        <span key={index}>{clima} </span>
      ))}
    </div>
    <div>
      <h4>Terrenos:</h4>
      {planet.terrains.map((terrain, index) => (
        <span key={index}>{terrain} </span>
      ))}
    </div>
  </div>
);
