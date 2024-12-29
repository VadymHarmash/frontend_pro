import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  console.log(process.env);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
