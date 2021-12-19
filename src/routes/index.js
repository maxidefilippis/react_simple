import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Router = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route key={`routes${index}`} {...route} />
    ))}
  </Routes>
);

export default Router;
