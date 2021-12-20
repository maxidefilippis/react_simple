import React from "react";
import "./index.scss";
import { PlanetCard } from "../..";

const PlanetsMapping = ({ search = [], data }) => (
  <div className="planetsMapping">
    {search?.length > 0
      ? search?.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))
      : data?.map((planet) => <PlanetCard key={planet.name} planet={planet} />)}
  </div>
);

export default PlanetsMapping;
