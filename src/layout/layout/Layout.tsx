import { FC } from "react"
import { LayoutProps } from "./Layout.props"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
