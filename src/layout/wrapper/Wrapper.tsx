import { ReactNode } from "react"

import styles from "./Wrapper.module.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Wrapper
