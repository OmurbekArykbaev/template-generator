import styles from "./Wrapper.module.css"
import { ReactNode } from "react"

const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  return <main className={styles.container}>{children}</main>
}

export default Wrapper
