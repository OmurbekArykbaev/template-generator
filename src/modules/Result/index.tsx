import { TextArea } from "../../components"
import { useAppSelector } from "../../hooks/RtkHooks"
import { DoString } from "./helpers/refactoringToString"
import { showPersonalData } from "./helpers/showPersonalData"
import useGetTypeIssue from "./hooks/useGetTypeIssue"

const Result = () => {
  const template = useGetTypeIssue()
  const resultIsDone = useAppSelector((state) => state.quiz.answersIsDone)
  const { ls, login, password, phone } = useAppSelector(
    (state) => state.userData
  )

  const jaja = DoString(
    template,
    resultIsDone,
    showPersonalData({ ls, login, password, phone })
  )

  return (
    <>
      <TextArea value={jaja} />
    </>
  )
}

export default Result
