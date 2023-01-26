import { useSelector, useDispatch } from "react-redux"
import Button from "./components/Button"
import Input from "./components/Input"
import Legend from "./components/Legend"
import { FC, useState } from "react"
import cn from "classnames"

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
      className={cn({
        hidden: hide,
      })}
    >
      <p>{props.questionTitle}</p>
      <div className="flex space-x-3">
        <Button onClick={onSetTrueHandler}>Да</Button>

        <Button onClick={onSetFalseHandler}>Нет</Button>
      </div>
    </div>
  )
}

export default Quiz
