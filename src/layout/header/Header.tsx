import { Input } from "../../components"
import UserForm from "../../modules/UserForm"
import styles from "./Header.module.css"

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>Ремонт</li>
          <li>Подключение</li>
        </ul>
        <UserForm />
      </div>
    </header>
  )
}

export default Header
