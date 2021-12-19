import { Home, Favorites, NotFound } from "../views";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
