import { useState, useEffect } from "react"
import cn from "classnames"

import styles from "./index.module.css"
import Button from "./components/Button"
import { useAppDispatch, useAppSelector } from "../../hooks/RtkHooks"
import { INotWorking } from "../../types/reapairRequest.interfaces"
import { addAnswers, removeAnswers } from "./redux/quiz"

const Quiz = ({ ...props }: INotWorking) => {
  const [hide, setHide] = useState<boolean>(false)
  const answersFromStore = useAppSelector(
    (state) => state.quiz.totalAnswers
  ).find((p) => p.id === props.id)

  const dispatch = useAppDispatch()

  useEffect(() => {}, [])

  const onSetTrueHandler = () => {
    dispatch(addAnswers({ ...props, userAnswer: true }))
    setHide(true)
  }

  const onSetFalseHandler = () => {
    dispatch(addAnswers({ ...props, userAnswer: false }))
    setHide(true)
  }
  const onRemoveHandler = () => {
    dispatch(removeAnswers(props.id))
    setHide(false)
  }

  return (
    <div
      className={cn(styles.quiz, {
        "border-opacity-20": hide,
      })}
    >
      <h1
        className={cn({
          "opacity-20": hide,
        })}
      >
        {props.questionTitle}
      </h1>

      <div>
        {!answersFromStore ? (
          <>
            <Button onClick={onSetTrueHandler}>Да</Button>
            <Button onClick={onSetFalseHandler}>Нет</Button>
          </>
        ) : (
          <Button onClick={onRemoveHandler} className="bg-red-300 text-red-600">
            Удалить
          </Button>
        )}

        {/* {answersFromStore && } */}
      </div>
    </div>
  )
}

export default Quiz
