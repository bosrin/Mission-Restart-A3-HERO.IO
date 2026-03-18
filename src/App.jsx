import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home/Home";
import AllApps from "./components/AllApps/AllApps";
import AppDetails from "./components/AppDetails/AppDetails";
import Installation from "./components/Installation/Installation";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/apps", element: <AllApps /> },
      { path: "/app/:id", element: <AppDetails /> },
      { path: "/installation", element: <Installation /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}