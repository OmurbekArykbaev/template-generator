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
  const [isVisible, setIsVisible] = useState<boolean>(false)
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
    setIsVisible(true)
  }

  return (
    <>
      <div className="flex w-full justify-center mb-4">
        <Button className="h-[50px]" onClick={onGenerateHandler}>
          Генерировать
        </Button>
      </div>
      {isVisible && (
        <div className="flex justify-center">
          <TextArea
            className="w-[80%] h-[130px]"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
      )}
    </>
  )
}

export default Result
