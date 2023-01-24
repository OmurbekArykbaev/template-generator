import { Input } from "../../components"
import styles from "./Header.module.css"

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>Ремонт</li>
          <li>Подключение</li>
        </ul>
        <form className="flex flex-row space-x-4">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="ls">
              Лицевой счет
            </label>
            <Input type="text" placeholder="ЛС" name="ls" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="ls">
              Логин
            </label>
            <Input type="text" placeholder="Логин" name="login" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="ls">
              Пароль
            </label>
            <Input type="text" placeholder="Пароль" name="password" />
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
