import { useState } from "react"
import cn from "classnames"

import styles from "./index.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/RtkHooks"
import { IQuiz, IStateOption } from "../../types/AllQuiz.interfaces"
import { addAnswers, removeAnswers } from "./redux/quiz"
import { motion } from "framer-motion"

import Buttons from "./components/Buttons"
import CustomSelect from "./components/CustomSelect"
import ButtonRemove from "./components/ButtonRemove"

const Quiz = ({ ...props }: IQuiz) => {
  const [hide, setHide] = useState<boolean>(false)
  const answersFromStore = useAppSelector(
    (state) => state.quiz.totalAnswers
  ).find((p) => p.id === props.id)

  const dispatch = useAppDispatch()

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

  const onSelectHandler = (value: IStateOption | null) => {
    dispatch(addAnswers({ ...props, userAnswer: value?.answer }))
    setHide(true)
  }

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div
        className={cn(styles.quiz, {
          "border-opacity-20": hide,
        })}
      >
        <h1>{props.questionTitle}</h1>

        <div>
          <Buttons
            isVisible={Boolean(!answersFromStore)}
            isVisible2={Boolean(props.stateOption)}
            onSetFalseHandler={onSetFalseHandler}
            onSetTrueHandler={onSetTrueHandler}
          />
          <ButtonRemove
            isVisible={Boolean(answersFromStore)}
            onRemoveHandler={onRemoveHandler}
          />

          <CustomSelect
            isVisible={Boolean(props.stateOption && !answersFromStore)}
            optionArray={props.stateOption}
            onSelectHandler={onSelectHandler}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Quiz
