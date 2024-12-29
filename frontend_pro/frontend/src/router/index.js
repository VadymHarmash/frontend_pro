import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Main } from "../pages/Main";
import { About } from "../pages/About";
import { Hotels } from "../pages/Hotels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
    ],
  },
]);
