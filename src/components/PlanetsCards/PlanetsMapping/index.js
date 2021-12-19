import React from "react";
import "./index.scss";
import { PlanetCard } from "../..";

const PlanetsMapping = ({ planets }) => (
  <div className="planetsMapping">
    {planets.map((planet) => (
      <PlanetCard key={planet.name} planet={planet} />
    ))}
  </div>
);

export default PlanetsMapping;
