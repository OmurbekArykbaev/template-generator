import { useEffect } from "react"

import { breaks } from "../../const/AllQuiz"
import { Wrapper } from "../../layout"
import Back from "../../layout/backNavigateBtn/Back"
import Quiz from "../../modules/Quiz"
import Result from "../../modules/Result"
import { useAppDispatch, useAppSelector } from "../../hooks/RtkHooks"
import { getType } from "../../modules/Result/slices/getTypeIssueSlices"
import { clearAnswer } from "../../modules/Quiz/redux/quiz"
import useGetUserData from "../../hooks/useGetUserData"
import { useNavigate } from "react-router-dom"

const BreakPage = () => {
  const dispatch = useAppDispatch()
  const isHasData = useGetUserData()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getType("Break"))

    return function cleanUpAnswer() {
      dispatch(clearAnswer())
    }
  }, [isHasData])

  return (
    <Wrapper>
      <Back />
      <section>
        {breaks.map((item) => (
          <Quiz key={item.id} {...item} />
        ))}
      </section>
      <Result />
    </Wrapper>
  )
}

export default BreakPage
