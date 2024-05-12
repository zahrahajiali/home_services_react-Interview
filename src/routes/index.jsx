import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/search"
import Zones from "../pages/zones"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Search/>,
  },
  {
    path: "/Zones",
    element: <Zones/>,
  },

]);
