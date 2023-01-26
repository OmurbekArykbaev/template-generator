import { Input } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks/RtkHooks"
import { addAccount, addLogin, addPassword, addPhone } from "./slices/userForm"

const UserFrom = () => {
  const dispatch = useAppDispatch()

  const { ls, login, password, phone } = useAppSelector(
    (state) => state.userData
  )

  return (
    <form className="flex flex-row space-x-4">
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="ls">
          Лицевой счет
        </label>
        <Input
          type="text"
          placeholder="ЛС"
          name="ls"
          value={ls}
          onChange={(e) => dispatch(addAccount(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="ls">
          Логин
        </label>
        <Input
          type="text"
          placeholder="Логин"
          name="login"
          value={login}
          onChange={(e) => dispatch(addLogin(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="ls">
          Пароль
        </label>
        <Input
          type="text"
          placeholder="Пароль"
          name="password"
          value={password}
          onChange={(e) => dispatch(addPassword(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="ls">
          Телефон
        </label>
        <Input
          type="number"
          placeholder="Телефон"
          name="phone"
          value={phone}
          onChange={(e) => dispatch(addPhone(e.target.value))}
        />
      </div>
    </form>
  )
}

export default UserFrom
