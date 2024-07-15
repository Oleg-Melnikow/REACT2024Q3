import { RouteObject, Navigate } from "react-router-dom";
import DetailsCard from "components/DetailsCard/DetailsCard";
import NotFound from "./pages/NotFound/NotFound.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    children: [{ path: "/details/:id", element: <DetailsCard /> }],
  },
  { path: "/404", element: <NotFound /> },
  { path: "/*", element: <Navigate to="404" replace /> },
];

export default routes;
