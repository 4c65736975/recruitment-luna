import { ModulesPage } from "./pages/ModulesPage";
import { useAppStyles } from "./App.styles";
import { DashboardLayout } from "@/layouts/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/modules",
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <ModulesPage/>
      },
      {
        path: "/modules/:id",
        element: <div>Place module details page</div>
      }
    ]
  }
]);

const App = () => {
  useAppStyles();

  return <RouterProvider router={router}/>;
};

export default App;