import { FC } from "react"
import { LayoutProps } from "./Layout.props"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Wrapper from "../wrapper/Wrapper"

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout
