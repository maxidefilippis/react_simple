import React from "react";
import { PlanetCard } from "../..";

const PlanetsMapping = ({ planets }) => (
  <div>
    {planets.map((planet) => (
      <PlanetCard key={planet.name} planet={planet} />
    ))}
  </div>
);

export default PlanetsMapping;
