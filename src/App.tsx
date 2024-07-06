import RootLayout from "./layouts/RootLayout";
import ModulePage from "./pages/ModulePage";
import ModulesPage from "./pages/ModulesPage";
import { useAppStyles } from "./App.styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/modules",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <ModulesPage/>
      },
      {
        path: "/modules/:id",
        element: <ModulePage/>
      }
    ]
  }
]);

const App = () => {
  useAppStyles();

  return <RouterProvider router={router}/>;
};

export default App;