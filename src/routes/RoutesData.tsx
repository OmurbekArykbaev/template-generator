import { createBrowserRouter } from "react-router-dom"

import BreakPage from "../pages/break"
import Home from "../pages/home"
import IptvPage from "../pages/iptv"
import NotWorking from "../pages/notWorking"
import SlowSpeedPage from "../pages/slow"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/not-working",
    element: <NotWorking />,
  },
  {
    path: "/break",
    element: <BreakPage />,
  },
  {
    path: "/slow",
    element: <SlowSpeedPage />,
  },
  {
    path: "/iptv",
    element: <IptvPage />,
  },
])
