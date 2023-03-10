import { InW } from "../../const/AllQuiz"
import { useAppDispatch } from "../../hooks/RtkHooks"
import { Wrapper } from "../../layout"
import Back from "../../layout/backNavigateBtn/Back"
import Quiz from "../../modules/Quiz"
import Result from "../../modules/Result"
import { useEffect } from "react"
import { getType } from "../../modules/Result/slices/getTypeIssueSlices"
import { clearAnswer } from "../../modules/Quiz/redux/quiz"

const NotWorking = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getType("InternetNeRabotaet"))

    return function cleanUpAnswer() {
      dispatch(clearAnswer())
    }
  }, [])

  return (
    <Wrapper>
      <Back />
      <section>
        {InW.map((item) => (
          <Quiz key={item.id} {...item} />
        ))}
      </section>
      <Result />
    </Wrapper>
  )
}

export default NotWorking
