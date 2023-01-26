import { useState } from "react"
import cn from "classnames"

import styles from "./index.module.css"
import Button from "./components/Button"
import { useAppDispatch } from "../../hooks/RtkHooks"
import { INotWorking } from "../../types/reapairRequest.interfaces"
import { getAnswers } from "./redux/quiz"

const Quiz = ({ ...props }: INotWorking) => {
  const [hide, setHide] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onSetTrueHandler = () => {
    dispatch(getAnswers({ ...props, userAnswer: true }))
    setHide(true)
  }

  const onSetFalseHandler = () => {
    dispatch(getAnswers({ ...props, userAnswer: false }))
    setHide(true)
  }

  return (
    <div
      className={cn(styles.quiz, {
        hidden: hide,
      })}
    >
      <h1>{props.questionTitle}</h1>

      <div>
        <Button onClick={onSetTrueHandler}>Да</Button>

        <Button onClick={onSetFalseHandler}>Нет</Button>
      </div>
    </div>
  )
}

export default Quiz
