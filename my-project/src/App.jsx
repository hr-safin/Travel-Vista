import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { MainLayout } from "./MainLayout/MainLayout";
import { Home } from "./Component/Home/Home";
import { Error } from "./Error/Error";
function App() {

  const router = new createBrowserRouter([
    {
      path : "/",
      element : <MainLayout />,
      errorElement : <Error />,
      children : [
        {
          path : "/",
          element : <Home />
        }
      ]
    }
  ])

  return (
    <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App
