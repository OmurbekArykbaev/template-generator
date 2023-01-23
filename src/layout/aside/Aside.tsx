import { Input } from "../../components"
import styles from "./Aside.module.css"

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div>
        <form>
          <Input />
          <Input />
          <Input />
        </form>
      </div>
    </aside>
  )
}

export default Aside
