import { useEffect } from "react"

import { Wrapper } from "../../layout"
import Back from "../../layout/backNavigateBtn/Back"
import { useAppDispatch } from "../../hooks/RtkHooks"
import { getType } from "../../modules/Result/slices/getTypeIssueSlices"
import { clearAnswer } from "../../modules/Quiz/redux/quiz"

import Quiz from "../../modules/Quiz"
import { slow } from "../../const/AllQuiz"
import Result from "../../modules/Result"

const SlowSpeedPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getType("SlowSpeed"))

    return function cleanUpAnswer() {
      dispatch(clearAnswer())
    }
  }, [])

  return (
    <Wrapper>
      <Back />
      <section>
        {slow.map((item) => (
          <Quiz key={item.id} {...item} />
        ))}
        <Result />
      </section>
    </Wrapper>
  )
}

export default SlowSpeedPage
