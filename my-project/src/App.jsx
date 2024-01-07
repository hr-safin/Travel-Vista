import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { MainLayout } from "./MainLayout/MainLayout";
import { Home } from "./Component/Home/Home";
import { Error } from "./Error/Error";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";
import { About } from "./Component/About/About";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SginUp/SignUp";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [isLoading, setLoading] = useState("turu");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])

  const router = new createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/login",
          element : <Login />
        },
        {
          path : "/signUp",
          element : <SignUp />
        }
      ],
    },
  ]);

  return isLoading ? (
    <div className="flex h-screen justify-center items-center lg:text-3xl ">
    <ScaleLoader color="#faa935" />
    </div>
  ) : (
    <>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster />
      </>
  );
}

export default App;
