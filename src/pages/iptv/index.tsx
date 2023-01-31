import { useAppDispatch } from "../../hooks/RtkHooks"
import { Wrapper } from "../../layout"
import Back from "../../layout/backNavigateBtn/Back"
import { useEffect } from "react"
import { getType } from "../../modules/Result/slices/getTypeIssueSlices"
import { clearAnswer } from "../../modules/Quiz/redux/quiz"

const IptvPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getType("IPTV"))

    return function cleanUpAnswer() {
      dispatch(clearAnswer())
    }
  }, [])

  return (
    <Wrapper>
      <Back />
      <section>IptvPage</section>
    </Wrapper>
  )
}

export default IptvPage
