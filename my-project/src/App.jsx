import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
function App() {

  const router = new createBrowserRouter([
    {

    }
  ])

  return (
    <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App
