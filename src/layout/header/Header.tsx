import styles from "./Header.module.css"

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>Ремонт</li>
          <li>Подключение</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
