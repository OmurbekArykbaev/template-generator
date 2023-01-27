import { TextArea } from "../../components"
import Button from "../../components/button/Button"
import { useAppSelector, useAppDispatch } from "../../hooks/RtkHooks"
import { DoString } from "./helpers/refactoringToString"
import { showPersonalData } from "./helpers/showPersonalData"
import useGetTypeIssue from "./hooks/useGetTypeIssue"
import { generateAnswer } from "../Quiz/redux/quiz"
import { useState, useEffect } from "react"

const Result = () => {
  const [value, setValue] = useState<string>("")
  const template = useGetTypeIssue()
  const dispatch = useAppDispatch()

  const resultIsDone = useAppSelector((state) => state.quiz.answersIsDone)
  const data = useAppSelector((state) => state.userData)

  useEffect(() => {
    setValue(DoString(template, resultIsDone, showPersonalData(data)))
  }, [data, template, resultIsDone])

  const onGenerateHandler = () => {
    dispatch(generateAnswer())
    setValue(value)
  }

  return (
    <>
      <div className="flex justify-center mb-4">
        <Button onClick={onGenerateHandler}>Генерировать</Button>
      </div>
      <div className="flex justify-center">
        <TextArea className="w-[80%] h-[130px]" value={value} />
      </div>
    </>
  )
}

export default Result
