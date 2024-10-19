import { createBrowserRouter } from "react-router-dom";
import App from "../src/Pages/App.jsx";
import Film from "../src/Pages/Film.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "Film",
        element: <Film />,
        children: [
          {
            path: ":title",
            element: <Film />,
          },
        ],
      },
    ],
  },
]);
export default AppRouter;
