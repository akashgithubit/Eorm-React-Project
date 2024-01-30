import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import routes from "./routes"
//import Layout from "./pages/Layout"
import Page404 from "./pages/Page404"
import DefaultLayout from "./dist/layout/DefaultLayout"

function App() {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      errorElement: <Page404 />,
      children: routes
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
