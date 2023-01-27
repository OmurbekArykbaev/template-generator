import { data } from "../../const/repairRequest"
import { Wrapper } from "../../layout"
import Back from "../../layout/backNavigateBtn/Back"
import Quiz from "../../modules/Quiz"

const NotWorking = () => {
  return (
    <Wrapper>
      <Back />
      <section>
        {data.map((p) => (
          <Quiz {...p} />
        ))}
      </section>
    </Wrapper>
  )
}

export default NotWorking
