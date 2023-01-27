import { data } from "../../const/repairRequest"
import { Wrapper } from "../../layout"
import Back from "../../layout/backNavigateBtn/Back"
import Quiz from "../../modules/Quiz"
import Result from "../../modules/Result"

const NotWorking = () => {
  return (
    <Wrapper>
      <Back />
      <section>
        {data.map((item) => (
          <Quiz {...item} />
        ))}
      </section>
      <Result />
    </Wrapper>
  )
}

export default NotWorking
