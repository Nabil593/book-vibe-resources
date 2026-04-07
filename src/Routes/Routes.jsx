import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";

export const router = createBrowserRouter([
  {path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />

      },
      {
        path: '/books',
        element: <Books />
      }
    ],
    errorElement: <div><h1>Page Not Found</h1></div>
  }
])
