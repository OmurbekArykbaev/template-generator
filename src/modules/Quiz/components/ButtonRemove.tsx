import { FC } from "react"
import Button from "../../../components/button/Button"
interface IButtonRemove {
  isVisible: boolean
  onRemoveHandler: () => void
}

const ButtonRemove: FC<IButtonRemove> = ({ isVisible, onRemoveHandler }) => {
  if (isVisible) {
    return (
      <Button onClick={onRemoveHandler} className="bg-red-300 text-red-600">
        Удалить
      </Button>
    )
  } else return null
}

export default ButtonRemove
