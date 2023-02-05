import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Navbar from "./components/navbar/Navbar"
import LeftBar from './components/leftbar/Leftbar';
import RightBar from './components/rightbar/Rightbar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/authContext'


function App() {

  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext)

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>

    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
