import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/home"
import NotWorking from "../pages/notWorking"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/not-working",
    element: <NotWorking />,
  },
])
