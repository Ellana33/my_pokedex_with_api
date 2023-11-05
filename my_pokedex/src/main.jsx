import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";  // <-- Ajoutez cette ligne pour importer axios

import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// page components

import Home from "./components/Home";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/:id",
        element: <Home />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${params.id}`
          );
          console.log(response.data);
          return response.data;
        },
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
