import { FC } from "react"
import Button from "../../../components/button/Button"

interface IButtons {
  onSetTrueHandler: () => void
  onSetFalseHandler: () => void
  isVisible: boolean
  isVisible2: boolean
}

const Buttons: FC<IButtons> = ({
  onSetTrueHandler,
  onSetFalseHandler,
  isVisible,
  isVisible2,
}) => {
  if (isVisible && !isVisible2) {
    return (
      <>
        <Button onClick={onSetTrueHandler}>Да</Button>
        <Button onClick={onSetFalseHandler}>Нет</Button>
      </>
    )
  } else return null
}

export default Buttons
