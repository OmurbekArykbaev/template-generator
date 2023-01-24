import { FC } from "react"
import { LayoutProps } from "./Layout.props"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Aside from "../aside/Aside"
import Wrapper from "../wrapper/Wrapper"

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Aside />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout
