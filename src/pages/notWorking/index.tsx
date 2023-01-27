import { data } from "../../const/repairRequest"
import { Wrapper } from "../../layout"
import Quiz from "../../modules/Quiz"

const NotWorking = () => {
  return (
    <Wrapper>
      <section>
        {data.map((p) => (
          <Quiz {...p} />
        ))}
      </section>
    </Wrapper>
  )
}

export default NotWorking
