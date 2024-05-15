import { createBrowserRouter } from "react-router-dom";
import DonJonHome from "../components/home";
import HomeLayout from "../layouts/HomeLayout";
import { ReactElement } from "react";
import DetailedLayout from "../layouts/DetailedLayout";
import DetailedView from "../components/detailedView";
import SavedView from "../components/savedView";

interface Route {
  path: string;
  element: ReactElement;
}

interface NestedRoute extends Route {
  children?: Route[];
}

const homeRoutes: NestedRoute = {
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      path: "",
      element: <DonJonHome />,
    },
  ],
};

const detailedRoutes: NestedRoute = {
  path: "detailed",
  element: <DetailedLayout />,
  children: [
    {
      path: ":index",
      element: <DetailedView />,
    },
    {
      path: "saved",
      element: <SavedView />,
    },
  ],
};
const router = createBrowserRouter([{ ...homeRoutes }, { ...detailedRoutes }]);

export default router;
