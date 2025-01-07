import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Main } from "../pages/Main";
import { About } from "../pages/About";
import { Hotels } from "../pages/Hotels";
import { Hotel } from "../pages/Hotel";

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
      {
        path: "/hotels/:id",
        element: <Hotel />,
      },
    ],
  },
]);
